import { Component, OnInit, OnDestroy, NgZone, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MetricsPanelComponent } from '../metrics-panel/metrics-panel.component';
import { AUTH_SERVICE, type AuthEvent } from '@mfe-playground/auth';

const SHARED_STATE_KEY = '__mfeSharedState';

interface RemoteCard {
  name: string;
  framework: string;
  port: number;
  description: string;
  route: string;
  color: string;
  status: 'online' | 'offline' | 'loading';
  tag: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, MetricsPanelComponent],
  template: `
    <div class="dashboard">
      <header class="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p class="subtitle">Micro Frontend orchestration powered by Native Federation</p>
        </div>
        <div class="header-badge">
          <span class="pulse"></span>
          Live
        </div>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value">{{ remotes.length }}</div>
          <div class="stat-label">Remotes</div>
        </div>
        <div class="stat-card">
          <div class="stat-value accent-green">{{ onlineCount }}</div>
          <div class="stat-label">Online</div>
        </div>
        <div class="stat-card">
          <div class="stat-value accent-blue">{{ metricsCount }}</div>
          <div class="stat-label">Metrics</div>
        </div>
        <div class="stat-card">
          <div class="stat-value accent-purple">{{ uptime }}</div>
          <div class="stat-label">Session</div>
        </div>
      </div>

      <h2 class="section-title">Shared Context</h2>
      <div class="shared-context">
        <div class="context-item">
          <span class="context-key">user:name</span>
          <span class="context-value">{{ sharedUserName || '—' }}</span>
        </div>
        <div class="context-item">
          <span class="context-key">user:theme</span>
          <span class="context-badge" [style.borderColor]="themeColor">{{ sharedTheme || 'dark' }}</span>
        </div>
        <div class="context-item">
          <span class="context-key">counter:value</span>
          <span class="context-value">{{ sharedCounter }}</span>
        </div>
        <div class="context-item">
          <span class="context-key">user:notifications</span>
          <span class="context-badge" [style.borderColor]="sharedNotifications ? '#22c55e' : '#555'">{{ sharedNotifications ? 'ON' : 'OFF' }}</span>
        </div>
        <div class="context-item">
          <span class="context-key">auth:status</span>
          <span class="context-badge" [style.borderColor]="auth.isAuthenticated() ? '#22c55e' : '#555'">{{ auth.isAuthenticated() ? 'Authenticated' : 'Guest' }}</span>
        </div>
        <div class="context-item">
          <span class="context-key">auth:user</span>
          <span class="context-value">{{ auth.userDisplayName() }}</span>
        </div>
        <div class="context-hint">Propagated via Angular Signals + BroadcastChannel across all remotes</div>
      </div>

      <h2 class="section-title">Auth Events <span class="events-badge">via Signals & Subjects</span></h2>
      <div class="auth-events">
        @if (authEvents.length === 0) {
          <div class="events-empty">No auth events yet. Sign in from the sidebar to see events flow.</div>
        } @else {
          @for (event of authEvents; track event.timestamp) {
            <div class="event-row">
              <span class="event-type" [class]="'event-' + event.type">{{ event.type }}</span>
              <span class="event-user">{{ event.user?.name ?? '—' }}</span>
              <span class="event-time">{{ formatTime(event.timestamp) }}</span>
            </div>
          }
        }
      </div>

      <h2 class="section-title">Remote Modules</h2>
      <div class="remotes-grid">
        @for (remote of remotes; track remote.name) {
          <a [routerLink]="remote.route" class="remote-card">
            <div class="remote-header">
              <span class="remote-name">{{ remote.name }}</span>
              <span class="remote-status" [class]="remote.status">{{ remote.status }}</span>
            </div>
            <div class="remote-description">{{ remote.description }}</div>
            <div class="remote-meta">
              <span class="remote-tag" [style.color]="remote.color">{{ remote.tag }}</span>
              <span class="remote-port">:{{ remote.port }}</span>
            </div>
          </a>
        }
      </div>

      <h2 class="section-title">Real-time Metrics</h2>
      <app-metrics-panel />
    </div>
  `,
  styles: [`
    .dashboard { max-width: 1200px; margin: 0 auto; }
    .dashboard-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 32px; }
    h1 { font-size: 32px; font-weight: 800; letter-spacing: -0.03em; }
    .subtitle { color: var(--text-secondary); margin-top: 4px; font-size: 14px; }
    .header-badge { display: flex; align-items: center; gap: 8px; padding: 6px 14px; background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.2); border-radius: 20px; font-size: 13px; font-weight: 600; color: var(--accent-green); }
    .pulse { width: 8px; height: 8px; border-radius: 50%; background: var(--accent-green); animation: pulse 2s ease-in-out infinite; }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
    .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 40px; }
    .stat-card { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius); padding: 20px; text-align: center; }
    .stat-value { font-size: 32px; font-weight: 800; letter-spacing: -0.03em; }
    .stat-label { font-size: 13px; color: var(--text-secondary); margin-top: 4px; text-transform: uppercase; letter-spacing: 0.05em; }
    .accent-green { color: var(--accent-green); }
    .accent-blue { color: var(--accent-blue); }
    .accent-purple { color: var(--accent-purple); }
    .section-title { font-size: 20px; font-weight: 700; margin-bottom: 16px; }
    .shared-context { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius); padding: 16px 20px; margin-bottom: 40px; display: flex; flex-wrap: wrap; gap: 16px; align-items: center; }
    .context-item { display: flex; align-items: center; gap: 8px; }
    .context-key { font-size: 12px; font-family: 'JetBrains Mono', 'Fira Code', monospace; color: var(--text-secondary); background: var(--bg-secondary); padding: 3px 8px; border-radius: 4px; }
    .context-value { font-size: 14px; font-weight: 600; color: var(--accent-blue); }
    .context-badge { font-size: 12px; font-weight: 600; padding: 3px 10px; border: 1px solid; border-radius: 12px; }
    .context-hint { font-size: 11px; color: var(--text-secondary); margin-left: auto; }
    .remotes-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-bottom: 40px; }
    .remote-card { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius); padding: 20px; transition: all 0.2s ease; cursor: pointer; text-decoration: none; color: inherit; display: block; }
    .remote-card:hover { background: var(--bg-card-hover); border-color: var(--accent-blue); transform: translateY(-2px); text-decoration: none; }
    .remote-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
    .remote-name { font-weight: 700; font-size: 16px; }
    .remote-status { font-size: 11px; font-weight: 600; padding: 2px 8px; border-radius: 10px; text-transform: uppercase; letter-spacing: 0.05em; }
    .remote-status.online { background: rgba(34,197,94,0.15); color: var(--accent-green); }
    .remote-description { font-size: 13px; color: var(--text-secondary); margin-bottom: 16px; line-height: 1.5; }
    .remote-meta { display: flex; justify-content: space-between; align-items: center; }
    .remote-tag { font-size: 12px; font-weight: 600; }
    .remote-port { font-size: 11px; color: var(--text-secondary); font-family: 'JetBrains Mono', 'Fira Code', monospace; }
    @media (max-width: 768px) {
      .dashboard-header { flex-direction: column; gap: 12px; }
      .stats-grid { grid-template-columns: repeat(2, 1fr); }
      .shared-context { flex-direction: column; align-items: flex-start; }
      .context-hint { margin-left: 0; }
    }
    .events-badge { font-size: 11px; font-weight: 500; color: var(--accent-purple); background: rgba(168,85,247,0.1); padding: 2px 8px; border-radius: 10px; margin-left: 8px; }
    .auth-events { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius); padding: 16px 20px; margin-bottom: 40px; }
    .events-empty { font-size: 13px; color: var(--text-secondary); text-align: center; padding: 12px; }
    .event-row { display: flex; align-items: center; gap: 12px; padding: 8px 0; border-bottom: 1px solid var(--border-color); font-size: 13px; }
    .event-row:last-child { border-bottom: none; }
    .event-type { font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em; }
    .event-login { background: rgba(34,197,94,0.15); color: var(--accent-green); }
    .event-logout { background: rgba(239,68,68,0.15); color: #ef4444; }
    .event-token-refresh { background: rgba(59,130,246,0.15); color: var(--accent-blue); }
    .event-error { background: rgba(249,115,22,0.15); color: #f97316; }
    .event-session-expired { background: rgba(168,85,247,0.15); color: var(--accent-purple); }
    .event-user { flex: 1; font-weight: 500; }
    .event-time { color: var(--text-secondary); font-size: 11px; font-family: 'JetBrains Mono', 'Fira Code', monospace; }
    @media (max-width: 480px) {
      h1 { font-size: 24px; }
      .stats-grid { grid-template-columns: 1fr; }
      .remotes-grid { grid-template-columns: 1fr; }
    }
  `],
})
export class DashboardComponent implements OnInit, OnDestroy {
  auth = inject(AUTH_SERVICE);
  authEvents: AuthEvent[] = [];

  remotes: RemoteCard[] = [
    { name: 'remote-angular', framework: 'Angular 21', port: 4201, description: 'Interactive widget with counter and performance tracking', route: '/remote-angular', color: '#dd0031', status: 'online', tag: 'Widget' },
    { name: 'remote-forms', framework: 'Angular 21', port: 4202, description: 'Settings & shared state management across micro frontends', route: '/remote-forms', color: '#a855f7', status: 'online', tag: 'Forms' },
    { name: 'remote-charts', framework: 'Angular 21', port: 4203, description: 'Live metrics visualization and performance dashboard', route: '/remote-charts', color: '#3b82f6', status: 'online', tag: 'Charts' },
  ];

  uptime = '0s';
  metricsCount = 0;
  sharedUserName = '';
  sharedTheme = '';
  themeColor = '#1a1d29';
  sharedCounter = 0;
  sharedNotifications = true;

  private startTime = Date.now();
  private intervalId?: ReturnType<typeof setInterval>;
  private metricHandler!: (e: Event) => void;
  private unsubs: (() => void)[] = [];
  private themeColors: Record<string, string> = {
    dark: '#1a1d29', blue: '#3b82f6', purple: '#a855f7', green: '#22c55e',
  };

  constructor(private ngZone: NgZone) {}

  get onlineCount(): number {
    return this.remotes.filter((r) => r.status === 'online').length;
  }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      const s = Math.floor((Date.now() - this.startTime) / 1000);
      if (s < 60) this.uptime = `${s}s`;
      else if (s < 3600) this.uptime = `${Math.floor(s / 60)}m`;
      else this.uptime = `${Math.floor(s / 3600)}h`;
    }, 1000);

    // Initialize metrics count from global store
    const metricsStore = (globalThis as any)['__mfeMetricsStore'] as any[] | undefined;
    this.metricsCount = metricsStore ? metricsStore.length : 0;

    this.metricHandler = () => {
      const store = (globalThis as any)['__mfeMetricsStore'] as any[] | undefined;
      this.metricsCount = store ? store.length : 0;
    };
    window.addEventListener('mfe:metric', this.metricHandler);

    // Subscribe to auth events via RxJS Subject
    const authSub = this.auth.authEvents$.subscribe((event) => {
      this.ngZone.run(() => {
        this.authEvents = [event, ...this.authEvents].slice(0, 10);
      });
    });
    this.unsubs.push(() => authSub.unsubscribe());

    const state = (globalThis as any)[SHARED_STATE_KEY];
    if (state) {
      this.sharedUserName = state.get('user:name') ?? '';
      this.sharedTheme = state.get('user:theme') ?? '';
      this.themeColor = this.themeColors[this.sharedTheme] ?? '#1a1d29';
      this.sharedCounter = (state.get('counter:value') as number) ?? 0;
      this.sharedNotifications = (state.get('user:notifications') as boolean) ?? true;

      this.unsubs.push(
        state.subscribe('user:name', (v: string) => {
          this.ngZone.run(() => { this.sharedUserName = v; });
        }),
        state.subscribe('user:theme', (v: string) => {
          this.ngZone.run(() => {
            this.sharedTheme = v;
            this.themeColor = this.themeColors[v] ?? '#1a1d29';
          });
        }),
        state.subscribe('counter:value', (v: number) => {
          this.ngZone.run(() => { this.sharedCounter = v; });
        }),
        state.subscribe('user:notifications', (v: boolean) => {
          this.ngZone.run(() => { this.sharedNotifications = v; });
        }),
      );
    }
  }

  formatTime(timestamp: number): string {
    return new Date(timestamp).toLocaleTimeString();
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
    window.removeEventListener('mfe:metric', this.metricHandler);
    this.unsubs.forEach((fn) => fn());
  }
}
