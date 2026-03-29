export interface Metric {
  source: string;
  name: string;
  value: number;
  timestamp: number;
}

type MetricCallback = (metric: Metric) => void;

const MFE_METRIC_EVENT = 'mfe:metric';

/**
 * MetricsCollector uses window CustomEvents so it works across
 * independently-bundled federated modules (each gets its own copy
 * of this class, but they all communicate via the shared window).
 */
class MetricsCollector {
  private metrics: Metric[] = [];
  private listeners: MetricCallback[] = [];
  private listening = false;

  private ensureListening(): void {
    if (this.listening || typeof window === 'undefined') return;
    this.listening = true;
    window.addEventListener(MFE_METRIC_EVENT, ((e: CustomEvent<Metric>) => {
      const metric = e.detail;
      this.metrics.push(metric);
      this.listeners.forEach((cb) => cb(metric));
    }) as EventListener);
  }

  record(source: string, name: string, value: number): Metric {
    const metric: Metric = { source, name, value, timestamp: Date.now() };
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent(MFE_METRIC_EVENT, { detail: metric }));
    }
    return metric;
  }

  getAll(): readonly Metric[] {
    this.ensureListening();
    return this.metrics;
  }

  getBySource(source: string): Metric[] {
    return this.metrics.filter((m) => m.source === source);
  }

  subscribe(callback: MetricCallback): () => void {
    this.ensureListening();
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter((cb) => cb !== callback);
    };
  }

  clear(): void {
    this.metrics = [];
  }
}

export const metrics = new MetricsCollector();
