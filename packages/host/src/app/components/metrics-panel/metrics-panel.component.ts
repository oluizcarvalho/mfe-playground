import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MetricEntry {
  source: string;
  name: string;
  value: number;
  timestamp: number;
}

const MFE_METRIC_EVENT = 'mfe:metric';

@Component({
  selector: 'app-metrics-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="metrics-panel">
      <div class="metrics-header">
        <h3>Live Metrics Stream</h3>
        <span class="metric-count">{{ metricEntries.length }} events</span>
      </div>
      <div class="metrics-body">
        @for (entry of metricEntries; track entry.timestamp) {
          <div class="metric-row">
            <span class="metric-source" [style.color]="getColor(entry.source)">{{ entry.source }}</span>
            <span class="metric-name">{{ entry.name }}</span>
            <span class="metric-value">{{ formatValue(entry) }}</span>
            <span class="metric-time">{{ formatTime(entry.timestamp) }}</span>
          </div>
        }
        @if (metricEntries.length === 0) {
          <div class="metric-empty">Navigate to a remote module to see real metrics appear here.</div>
        }
      </div>
    </div>
  `,
  styles: [`
    .metrics-panel { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius); overflow: hidden; }
    .metrics-header { display: flex; justify-content: space-between; align-items: center; padding: 16px 20px; border-bottom: 1px solid var(--border-color); }
    .metrics-header h3 { font-size: 15px; font-weight: 600; }
    .metric-count { font-size: 12px; color: var(--text-secondary); background: var(--bg-secondary); padding: 4px 10px; border-radius: 12px; }
    .metrics-body { max-height: 300px; overflow-y: auto; }
    .metric-row { display: grid; grid-template-columns: 140px 1fr 80px 80px; gap: 12px; padding: 10px 20px; font-size: 13px; font-family: 'JetBrains Mono', 'Fira Code', monospace; border-bottom: 1px solid var(--border-color); transition: background 0.1s ease; }
    .metric-row:hover { background: var(--bg-card-hover); }
    .metric-source { font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .metric-name { color: var(--text-secondary); }
    .metric-value { text-align: right; color: var(--accent-green); font-weight: 600; }
    .metric-time { text-align: right; color: var(--text-secondary); font-size: 11px; }
    .metric-empty { padding: 40px 20px; text-align: center; color: var(--text-secondary); font-size: 14px; }
    @media (max-width: 640px) {
      .metric-row { grid-template-columns: 1fr 1fr; gap: 4px; padding: 10px 16px; }
      .metric-time { display: none; }
      .metric-source { font-size: 11px; }
      .metric-name { font-size: 11px; }
      .metrics-header { padding: 12px 16px; }
    }
  `],
})
export class MetricsPanelComponent implements OnInit, OnDestroy {
  metricEntries: MetricEntry[] = [];
  private handler!: (e: Event) => void;

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.handler = (e: Event) => {
      const metric = (e as CustomEvent<MetricEntry>).detail;
      this.ngZone.run(() => {
        this.metricEntries.unshift(metric);
        if (this.metricEntries.length > 50) this.metricEntries.pop();
      });
    };
    window.addEventListener(MFE_METRIC_EVENT, this.handler);

    // Load historical metrics from global store
    const store = (globalThis as any)['__mfeMetricsStore'] as MetricEntry[] | undefined;
    if (store) {
      this.metricEntries = [...store].reverse().slice(0, 50);
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener(MFE_METRIC_EVENT, this.handler);
  }

  getColor(source: string): string {
    const colors: Record<string, string> = {
      'remote-angular': '#dd0031',
      'remote-forms': '#a855f7',
      'remote-charts': '#3b82f6',
    };
    return colors[source] ?? '#8b8fa3';
  }

  formatValue(entry: MetricEntry): string {
    return entry.name === 'interaction' ? `#${entry.value}` : `${entry.value}ms`;
  }

  formatTime(ts: number): string {
    return new Date(ts).toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
}
