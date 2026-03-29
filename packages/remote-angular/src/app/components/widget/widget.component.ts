import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

const MFE_METRIC_EVENT = 'mfe:metric';
const SHARED_STATE_KEY = '__mfeSharedState';

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
        <span class="widget-icon">▲</span>
        <h3>Angular Remote Widget</h3>
        @if (userName) {
          <span class="user-badge">Hi, {{ userName }}</span>
        }
      </div>
      <p class="widget-description">
        This component is served from <strong>remote-angular</strong> (port 4201)
        via Native Federation.
      </p>
      <div class="widget-stats">
        <div class="widget-stat">
          <span class="stat-number">{{ counter }}</span>
          <span class="stat-label">Counter</span>
        </div>
        <div class="widget-stat">
          <span class="stat-number">{{ loadTime }}ms</span>
          <span class="stat-label">Load time</span>
        </div>
        <div class="widget-stat">
          <span class="stat-number angular-version">v21</span>
          <span class="stat-label">Angular</span>
        </div>
      </div>
      <button class="widget-btn" (click)="increment()">Increment Counter</button>
    </div>
  `,
  styles: [`
    .widget { background: linear-gradient(135deg, #1a1122 0%, #2d1b3d 100%); border: 1px solid #dd003133; border-radius: 12px; padding: 24px; color: #e4e6f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
    .widget-header { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; flex-wrap: wrap; }
    .user-badge { margin-left: auto; font-size: 12px; padding: 4px 12px; background: rgba(221,0,49,0.15); border: 1px solid rgba(221,0,49,0.3); border-radius: 16px; color: #dd0031; font-weight: 600; }
    .widget-icon { font-size: 24px; color: #dd0031; }
    h3 { font-size: 20px; font-weight: 700; margin: 0; }
    .widget-description { color: #8b8fa3; font-size: 14px; margin-bottom: 20px; line-height: 1.5; }
    .widget-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 20px; }
    .widget-stat { background: rgba(0,0,0,0.2); border-radius: 8px; padding: 16px; text-align: center; }
    .stat-number { display: block; font-size: 28px; font-weight: 800; color: #dd0031; }
    .stat-label { display: block; font-size: 11px; color: #8b8fa3; margin-top: 4px; text-transform: uppercase; letter-spacing: 0.05em; }
    .angular-version { color: #ff6b6b; }
    .widget-btn { width: 100%; padding: 12px; border: none; border-radius: 8px; background: #dd0031; color: white; font-size: 14px; font-weight: 600; cursor: pointer; transition: background 0.2s ease; }
    .widget-btn:hover { background: #ff1744; }
    @media (max-width: 640px) {
      .widget { padding: 16px; }
      .widget-stats { grid-template-columns: 1fr; }
    }
  `],
})
export class WidgetComponent implements OnInit, OnDestroy {
  counter = 0;
  loadTime = 0;
  userName = '';
  private initTime = performance.now();
  private unsubs: (() => void)[] = [];

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    const loadTime = Math.round(performance.now() - this.initTime);
    this.loadTime = loadTime;
    recordMetric('remote-angular', 'load-time', loadTime);

    requestAnimationFrame(() => {
      const renderTime = Math.round(performance.now() - this.initTime);
      recordMetric('remote-angular', 'render-time', renderTime);
    });

    const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    if (navEntry) {
      recordMetric('remote-angular', 'ttfb', Math.round(navEntry.responseStart - navEntry.requestStart));
    }

    const state = getSharedState();
    if (state) {
      this.userName = (state.get('user:name') as string) ?? '';
      this.unsubs.push(
        state.subscribe('user:name', (v: string) => {
          this.ngZone.run(() => { this.userName = v; });
        }),
      );
    }
  }

  ngOnDestroy(): void {
    this.unsubs.forEach((fn) => fn());
  }

  increment(): void {
    this.counter++;
    recordMetric('remote-angular', 'interaction', this.counter);
  }
}
