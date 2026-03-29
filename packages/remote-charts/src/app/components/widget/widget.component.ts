import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

const MFE_METRIC_EVENT = 'mfe:metric';
const SHARED_STATE_KEY = '__mfeSharedState';

interface MetricEntry {
  source: string;
  name: string;
  value: number;
  timestamp: number;
}

function recordMetric(source: string, name: string, value: number): void {
  window.dispatchEvent(new CustomEvent(MFE_METRIC_EVENT, {
    detail: { source, name, value, timestamp: Date.now() },
  }));
}

function getSharedState(): any {
  return (globalThis as any)[SHARED_STATE_KEY];
}

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="widget">
      <div class="widget-header">
        <span class="widget-icon">📊</span>
        <h3>Metrics Dashboard</h3>
        @if (userName) {
          <span class="user-badge">{{ userName }}</span>
        }
      </div>
      <p class="widget-description">
        Aggregated performance data from all micro frontends. Metrics are collected
        via <strong>window CustomEvents</strong> in real-time.
      </p>

      <div class="charts-grid">
        <div class="chart-card">
          <div class="chart-title">Avg Load Time</div>
          <div class="chart-value blue">{{ avgLoadTime }}ms</div>
          <div class="chart-bar-track">
            <div class="chart-bar blue-bg" [style.width.%]="clamp(avgLoadTime, 500)"></div>
          </div>
          <div class="chart-sub">across {{ sourceCount }} modules</div>
        </div>

        <div class="chart-card">
          <div class="chart-title">Avg Render Time</div>
          <div class="chart-value green">{{ avgRenderTime }}ms</div>
          <div class="chart-bar-track">
            <div class="chart-bar green-bg" [style.width.%]="clamp(avgRenderTime, 500)"></div>
          </div>
          <div class="chart-sub">first paint avg</div>
        </div>

        <div class="chart-card">
          <div class="chart-title">Total Interactions</div>
          <div class="chart-value purple">{{ totalInteractions }}</div>
          <div class="chart-bar-track">
            <div class="chart-bar purple-bg" [style.width.%]="clamp(totalInteractions, 50)"></div>
          </div>
          <div class="chart-sub">user events captured</div>
        </div>

        <div class="chart-card">
          <div class="chart-title">Total Events</div>
          <div class="chart-value orange">{{ totalEvents }}</div>
          <div class="chart-bar-track">
            <div class="chart-bar orange-bg" [style.width.%]="clamp(totalEvents, 100)"></div>
          </div>
          <div class="chart-sub">metrics collected</div>
        </div>
      </div>

      <div class="source-breakdown">
        <div class="breakdown-title">Events by Source</div>
        @for (src of sources; track src.name) {
          <div class="source-row">
            <span class="source-dot" [style.background]="src.color"></span>
            <span class="source-name">{{ src.name }}</span>
            <span class="source-count">{{ src.count }}</span>
            <div class="source-bar-track">
              <div class="source-bar" [style.width.%]="src.pct" [style.background]="src.color"></div>
            </div>
          </div>
        }
        @if (sources.length === 0) {
          <div class="empty">Navigate to other remotes to generate metrics data.</div>
        }
      </div>

      <div class="widget-stats">
        <div class="widget-stat">
          <span class="stat-number">{{ loadTime }}ms</span>
          <span class="stat-label">Load time</span>
        </div>
        <div class="widget-stat">
          <span class="stat-number blue">v21</span>
          <span class="stat-label">Angular</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .widget { background: linear-gradient(135deg, #0f1729 0%, #162040 100%); border: 1px solid rgba(59,130,246,0.2); border-radius: 12px; padding: 24px; color: #e4e6f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
    .widget-header { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; flex-wrap: wrap; }
    .widget-icon { font-size: 24px; }
    h3 { font-size: 20px; font-weight: 700; margin: 0; }
    .user-badge { margin-left: auto; font-size: 12px; padding: 4px 12px; background: rgba(59,130,246,0.15); border: 1px solid rgba(59,130,246,0.3); border-radius: 16px; color: #3b82f6; font-weight: 600; }
    .widget-description { color: #8b8fa3; font-size: 14px; margin-bottom: 24px; line-height: 1.5; }
    .charts-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 24px; }
    .chart-card { background: rgba(0,0,0,0.25); border-radius: 10px; padding: 16px; }
    .chart-title { font-size: 12px; color: #8b8fa3; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px; }
    .chart-value { font-size: 32px; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 8px; }
    .chart-bar-track { height: 4px; background: rgba(255,255,255,0.05); border-radius: 2px; margin-bottom: 8px; overflow: hidden; }
    .chart-bar { height: 100%; border-radius: 2px; transition: width 0.5s ease; }
    .chart-sub { font-size: 11px; color: #555; }
    .blue { color: #3b82f6; } .blue-bg { background: #3b82f6; }
    .green { color: #22c55e; } .green-bg { background: #22c55e; }
    .purple { color: #a855f7; } .purple-bg { background: #a855f7; }
    .orange { color: #f97316; } .orange-bg { background: #f97316; }
    .source-breakdown { background: rgba(0,0,0,0.25); border-radius: 10px; padding: 16px; margin-bottom: 24px; }
    .breakdown-title { font-size: 13px; font-weight: 600; margin-bottom: 12px; }
    .source-row { display: grid; grid-template-columns: 12px 1fr 40px 80px; gap: 10px; align-items: center; padding: 6px 0; font-size: 13px; }
    .source-dot { width: 10px; height: 10px; border-radius: 50%; }
    .source-name { font-weight: 500; }
    .source-count { text-align: right; color: #8b8fa3; font-weight: 600; }
    .source-bar-track { height: 4px; background: rgba(255,255,255,0.05); border-radius: 2px; overflow: hidden; }
    .source-bar { height: 100%; border-radius: 2px; transition: width 0.3s ease; }
    .empty { padding: 20px; text-align: center; color: #555; font-size: 13px; }
    .widget-stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
    .widget-stat { background: rgba(0,0,0,0.2); border-radius: 8px; padding: 16px; text-align: center; }
    .stat-number { display: block; font-size: 28px; font-weight: 800; color: #3b82f6; }
    .stat-label { display: block; font-size: 11px; color: #8b8fa3; margin-top: 4px; text-transform: uppercase; letter-spacing: 0.05em; }
    @media (max-width: 640px) {
      .widget { padding: 16px; }
      .charts-grid { grid-template-columns: 1fr; }
      .source-row { grid-template-columns: 12px 1fr 40px; }
      .source-bar-track { display: none; }
      .widget-stats { grid-template-columns: 1fr; }
    }
  `],
})
export class WidgetComponent implements OnInit, OnDestroy {
  userName = '';
  loadTime = 0;
  avgLoadTime = 0;
  avgRenderTime = 0;
  totalInteractions = 0;
  totalEvents = 0;
  sourceCount = 0;
  sources: { name: string; count: number; pct: number; color: string }[] = [];

  private initTime = performance.now();
  private metricHandler!: (e: Event) => void;
  private allMetrics: MetricEntry[] = [];
  private unsubs: (() => void)[] = [];
  private sourceColors: Record<string, string> = {
    'remote-angular': '#dd0031',
    'remote-forms': '#a855f7',
    'remote-charts': '#3b82f6',
  };

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    const loadTime = Math.round(performance.now() - this.initTime);
    this.loadTime = loadTime;
    recordMetric('remote-charts', 'load-time', loadTime);

    requestAnimationFrame(() => {
      const renderTime = Math.round(performance.now() - this.initTime);
      recordMetric('remote-charts', 'render-time', renderTime);
    });

    this.metricHandler = (e: Event) => {
      const metric = (e as CustomEvent<MetricEntry>).detail;
      this.ngZone.run(() => {
        this.allMetrics.push(metric);
        this.recalculate();
      });
    };
    window.addEventListener(MFE_METRIC_EVENT, this.metricHandler);

    const state = getSharedState();
    if (state) {
      this.userName = state.get('user:name') ?? '';
      this.unsubs.push(
        state.subscribe('user:name', (v: string) => {
          this.ngZone.run(() => { this.userName = v; });
        }),
      );
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener(MFE_METRIC_EVENT, this.metricHandler);
    this.unsubs.forEach((fn) => fn());
  }

  clamp(value: number, max: number): number {
    return Math.min((value / max) * 100, 100);
  }

  private recalculate(): void {
    this.totalEvents = this.allMetrics.length;

    const loadTimes = this.allMetrics.filter((m) => m.name === 'load-time');
    this.avgLoadTime = loadTimes.length
      ? Math.round(loadTimes.reduce((s, m) => s + m.value, 0) / loadTimes.length)
      : 0;

    const renderTimes = this.allMetrics.filter((m) => m.name === 'render-time');
    this.avgRenderTime = renderTimes.length
      ? Math.round(renderTimes.reduce((s, m) => s + m.value, 0) / renderTimes.length)
      : 0;

    const interactions = this.allMetrics.filter((m) => m.name === 'interaction');
    this.totalInteractions = interactions.length
      ? Math.max(...interactions.map((m) => m.value))
      : 0;

    const bySource = new Map<string, number>();
    for (const m of this.allMetrics) {
      bySource.set(m.source, (bySource.get(m.source) ?? 0) + 1);
    }
    this.sourceCount = bySource.size;
    const maxCount = Math.max(...bySource.values(), 1);
    this.sources = [...bySource.entries()].map(([name, count]) => ({
      name,
      count,
      pct: (count / maxCount) * 100,
      color: this.sourceColors[name] ?? '#8b8fa3',
    }));
  }
}
