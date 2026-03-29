import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const MFE_METRIC_EVENT = 'mfe:metric';
const SHARED_STATE_KEY = '__mfeSharedState';
const METRICS_STORE_KEY = '__mfeMetricsStore';

function recordMetric(source: string, name: string, value: number): void {
  const metric = { source, name, value, timestamp: Date.now() };
  const store = (globalThis as any)[METRICS_STORE_KEY];
  if (store) { store.push(metric); }
  window.dispatchEvent(new CustomEvent(MFE_METRIC_EVENT, { detail: metric }));
}

function getSharedState(): any {
  let state = (globalThis as any)[SHARED_STATE_KEY];
  if (!state) {
    const store = new Map<string, unknown>();
    const listeners = new Map<string, Set<Function>>();
    const channel = new BroadcastChannel('mfe-playground-state');
    function notify(key: string, value: unknown): void {
      listeners.get(key)?.forEach((cb: any) => cb(value, key));
    }
    channel.onmessage = (event: MessageEvent) => {
      const { key, value } = event.data;
      store.set(key, value);
      notify(key, value);
    };
    state = {
      get: (key: string) => store.get(key),
      set: (key: string, value: unknown) => { store.set(key, value); channel.postMessage({ key, value }); notify(key, value); },
      subscribe: (key: string, cb: Function) => {
        if (!listeners.has(key)) listeners.set(key, new Set());
        listeners.get(key)!.add(cb);
        return () => listeners.get(key)!.delete(cb);
      },
    };
    (globalThis as any)[SHARED_STATE_KEY] = state;
  }
  return state;
}

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="widget">
      <div class="widget-header">
        <span class="widget-icon">⚙</span>
        <h3>Settings &amp; Shared State</h3>
      </div>
      <p class="widget-description">
        Manage shared context across all micro frontends. Changes propagate in real-time
        via <strong>BroadcastChannel</strong> to every remote module.
      </p>

      <div class="form-group">
        <label for="userName">User Name</label>
        <input
          id="userName"
          type="text"
          [ngModel]="userName"
          (ngModelChange)="onNameChange($event)"
          placeholder="Enter your name..."
          class="form-input"
        />
      </div>

      <div class="form-group">
        <label>Theme</label>
        <div class="theme-options">
          @for (t of themes; track t.value) {
            <button
              class="theme-btn"
              [class.active]="theme === t.value"
              [style.borderColor]="theme === t.value ? t.color : 'transparent'"
              (click)="onThemeChange(t.value)"
            >
              <span class="theme-dot" [style.background]="t.color"></span>
              {{ t.label }}
            </button>
          }
        </div>
      </div>

      <div class="form-group">
        <label>Notification Preference</label>
        <div class="toggle-row">
          <span>Enable notifications</span>
          <button class="toggle" [class.on]="notifications" (click)="onToggleNotifications()">
            <span class="toggle-knob"></span>
          </button>
        </div>
      </div>

      <div class="widget-stats">
        <div class="widget-stat">
          <span class="stat-number">{{ changeCount }}</span>
          <span class="stat-label">Changes</span>
        </div>
        <div class="widget-stat">
          <span class="stat-number">{{ loadTime }}ms</span>
          <span class="stat-label">Load time</span>
        </div>
        <div class="widget-stat">
          <span class="stat-number purple-text">v21</span>
          <span class="stat-label">Angular</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .widget { background: linear-gradient(135deg, #1a1128 0%, #231540 100%); border: 1px solid rgba(168,85,247,0.2); border-radius: 12px; padding: 24px; color: #e4e6f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
    .widget-header { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
    .widget-icon { font-size: 24px; }
    h3 { font-size: 20px; font-weight: 700; margin: 0; }
    .widget-description { color: #8b8fa3; font-size: 14px; margin-bottom: 24px; line-height: 1.5; }
    .form-group { margin-bottom: 20px; }
    .form-group label { display: block; font-size: 13px; font-weight: 600; color: #8b8fa3; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px; }
    .form-input { width: 100%; padding: 10px 14px; background: rgba(0,0,0,0.3); border: 1px solid rgba(168,85,247,0.2); border-radius: 8px; color: #e4e6f0; font-size: 14px; outline: none; transition: border-color 0.2s; box-sizing: border-box; }
    .form-input:focus { border-color: #a855f7; }
    .form-input::placeholder { color: #555; }
    .theme-options { display: flex; gap: 8px; flex-wrap: wrap; }
    .theme-btn { display: flex; align-items: center; gap: 8px; padding: 8px 14px; background: rgba(0,0,0,0.3); border: 2px solid transparent; border-radius: 8px; color: #e4e6f0; font-size: 13px; cursor: pointer; transition: all 0.2s; }
    .theme-btn:hover { background: rgba(0,0,0,0.5); }
    .theme-btn.active { background: rgba(168,85,247,0.15); }
    .theme-dot { width: 12px; height: 12px; border-radius: 50%; }
    .toggle-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background: rgba(0,0,0,0.3); border-radius: 8px; font-size: 14px; }
    .toggle { width: 44px; height: 24px; border-radius: 12px; background: #333; border: none; cursor: pointer; position: relative; transition: background 0.2s; padding: 0; }
    .toggle.on { background: #a855f7; }
    .toggle-knob { position: absolute; top: 3px; left: 3px; width: 18px; height: 18px; border-radius: 50%; background: white; transition: transform 0.2s; display: block; }
    .toggle.on .toggle-knob { transform: translateX(20px); }
    .widget-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 24px; }
    .widget-stat { background: rgba(0,0,0,0.2); border-radius: 8px; padding: 16px; text-align: center; }
    .stat-number { display: block; font-size: 28px; font-weight: 800; color: #a855f7; }
    .stat-label { display: block; font-size: 11px; color: #8b8fa3; margin-top: 4px; text-transform: uppercase; letter-spacing: 0.05em; }
    .purple-text { color: #c084fc; }
    @media (max-width: 640px) {
      .widget { padding: 16px; }
      .widget-stats { grid-template-columns: 1fr; }
      .theme-options { flex-direction: column; }
    }
  `],
})
export class WidgetComponent implements OnInit, OnDestroy {
  userName = '';
  theme = 'dark';
  notifications = true;
  changeCount = 0;
  loadTime = 0;
  private initTime = performance.now();
  private unsubs: (() => void)[] = [];

  themes = [
    { value: 'dark', label: 'Dark', color: '#1a1d29' },
    { value: 'blue', label: 'Ocean', color: '#3b82f6' },
    { value: 'purple', label: 'Purple', color: '#a855f7' },
    { value: 'green', label: 'Matrix', color: '#22c55e' },
  ];

  ngOnInit(): void {
    const loadTime = Math.round(performance.now() - this.initTime);
    this.loadTime = loadTime;
    recordMetric('remote-forms', 'load-time', loadTime);

    requestAnimationFrame(() => {
      const renderTime = Math.round(performance.now() - this.initTime);
      recordMetric('remote-forms', 'render-time', renderTime);
    });

    const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    if (navEntry) {
      recordMetric('remote-forms', 'ttfb', Math.round(navEntry.responseStart - navEntry.requestStart));
    }

    const state = getSharedState();
    if (state) {
      this.userName = state.get('user:name') ?? '';
      this.theme = state.get('user:theme') ?? 'dark';
      this.notifications = state.get('user:notifications') ?? true;

      this.unsubs.push(
        state.subscribe('user:name', (v: string) => { this.userName = v; }),
        state.subscribe('user:theme', (v: string) => { this.theme = v; }),
        state.subscribe('user:notifications', (v: boolean) => { this.notifications = v; }),
      );
    }
  }

  ngOnDestroy(): void {
    this.unsubs.forEach((fn) => fn());
  }

  onNameChange(value: string): void {
    this.userName = value;
    this.changeCount++;
    getSharedState()?.set('user:name', value);
    recordMetric('remote-forms', 'interaction', this.changeCount);
  }

  onThemeChange(value: string): void {
    this.theme = value;
    this.changeCount++;
    getSharedState()?.set('user:theme', value);
    recordMetric('remote-forms', 'interaction', this.changeCount);
  }

  onToggleNotifications(): void {
    this.notifications = !this.notifications;
    this.changeCount++;
    getSharedState()?.set('user:notifications', this.notifications);
    recordMetric('remote-forms', 'interaction', this.changeCount);
  }
}
