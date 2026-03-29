import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MetricsPanelComponent } from '../metrics-panel/metrics-panel.component';

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

      <h2 class="section-title">Remote Modules</h2>
      <div class="remotes-grid">
        @for (remote of remotes; track remote.name) {
          <a [routerLink]="remote.route" class="remote-card">
            <div class="remote-header">
              <span class="remote-name">{{ remote.name }}</span>
              <span class="remote-status" [class]="remote.status">{{ remote.status }}</span>
            </div>
            <div class="remote-description">{{ remote.description }}</div>
            <div class="remote-tag" [style.color]="remote.color">{{ remote.tag }}</div>
          </a>
        }
      </div>

      <h2 class="section-title">Real-time Metrics</h2>
      <app-metrics-panel />
    </div>
  `,
  styles: [`
    .dashboard { max-width: 1200px; }
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
    .remotes-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-bottom: 40px; }
    .remote-card { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius); padding: 20px; transition: all 0.2s ease; cursor: pointer; text-decoration: none; color: inherit; display: block; }
    .remote-card:hover { background: var(--bg-card-hover); border-color: var(--accent-blue); transform: translateY(-2px); text-decoration: none; }
    .remote-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
    .remote-name { font-weight: 700; font-size: 16px; }
    .remote-status { font-size: 11px; font-weight: 600; padding: 2px 8px; border-radius: 10px; text-transform: uppercase; letter-spacing: 0.05em; }
    .remote-status.online { background: rgba(34,197,94,0.15); color: var(--accent-green); }
    .remote-description { font-size: 13px; color: var(--text-secondary); margin-bottom: 16px; line-height: 1.5; }
    .remote-tag { font-size: 12px; font-weight: 600; }
  `],
})
export class DashboardComponent implements OnInit, OnDestroy {
  remotes: RemoteCard[] = [
    { name: 'remote-angular', framework: 'Angular 21', port: 4201, description: 'Remote Angular micro frontend module', route: '/remote-angular', color: '#dd0031', status: 'online', tag: 'Angular' },
  ];

  uptime = '0s';
  metricsCount = 0;
  private startTime = Date.now();
  private intervalId?: ReturnType<typeof setInterval>;
  private metricHandler!: (e: Event) => void;

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

    this.metricHandler = () => { this.metricsCount++; };
    window.addEventListener('mfe:metric', this.metricHandler);
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
    window.removeEventListener('mfe:metric', this.metricHandler);
  }
}
