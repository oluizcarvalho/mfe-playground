export interface Metric {
  source: string;
  name: string;
  value: number;
  timestamp: number;
}

type MetricCallback = (metric: Metric) => void;

class MetricsCollector {
  private metrics: Metric[] = [];
  private subscribers = new Set<MetricCallback>();

  record(source: string, name: string, value: number): Metric {
    const metric: Metric = {
      source,
      name,
      value,
      timestamp: Date.now(),
    };
    this.metrics.push(metric);
    this.subscribers.forEach((cb) => cb(metric));
    return metric;
  }

  getAll(): readonly Metric[] {
    return this.metrics;
  }

  getBySource(source: string): Metric[] {
    return this.metrics.filter((m) => m.source === source);
  }

  subscribe(callback: MetricCallback): () => void {
    this.subscribers.add(callback);
    return () => this.subscribers.delete(callback);
  }

  clear(): void {
    this.metrics = [];
  }
}

export const metrics = new MetricsCollector();
