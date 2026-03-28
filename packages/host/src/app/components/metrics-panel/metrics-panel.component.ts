import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MetricEntry {
  source: string;
  name: string;
  value: number;
  timestamp: number;
}

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
            <span class="metric-value">{{ entry.value }}ms</span>
            <span class="metric-time">{{ formatTime(entry.timestamp) }}</span>
          </div>
        }
        @if (metricEntries.length === 0) {
          <div class="metric-empty">Waiting for metrics from remote modules...</div>
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
    .metric-source { font-weight: 600; }
    .metric-name { color: var(--text-secondary); }
    .metric-value { text-align: right; color: var(--accent-green); font-weight: 600; }
    .metric-time { text-align: right; color: var(--text-secondary); font-size: 11px; }
    .metric-empty { padding: 40px 20px; text-align: center; color: var(--text-secondary); font-size: 14px; }
  `],
})
export class MetricsPanelComponent implements OnInit, OnDestroy {
  metricEntries: MetricEntry[] = [];
  private intervalId?: ReturnType<typeof setInterval>;
  private readonly sources = ['remote-angular', 'remote-react', 'remote-vue'];
  private readonly metricNames = ['load-time', 'render-time', 'hydration', 'ttfb', 'fcp'];

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      const source = this.sources[Math.floor(Math.random() * this.sources.length)];
      const name = this.metricNames[Math.floor(Math.random() * this.metricNames.length)];
      const value = Math.floor(Math.random() * 200) + 10;
      this.metricEntries.unshift({ source, name, value, timestamp: Date.now() });
      if (this.metricEntries.length > 50) this.metricEntries.pop();
    }, 2000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  getColor(source: string): string {
    const colors: Record<string, string> = {
      'remote-angular': '#dd0031',
      'remote-react': '#61dafb',
      'remote-vue': '#4fc08d',
    };
    return colors[source] ?? '#8b8fa3';
  }

  formatTime(ts: number): string {
    return new Date(ts).toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
}
