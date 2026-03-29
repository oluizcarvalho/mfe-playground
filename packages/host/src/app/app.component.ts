import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="shell">
      <nav class="sidebar">
        <div class="logo">
          <span class="logo-icon">◆</span>
          <span class="logo-text">MFE Playground</span>
        </div>
        <ul class="nav-list">
          <li>
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
              <span class="nav-icon">▦</span> Dashboard
            </a>
          </li>
          <li>
            <a routerLink="/remote-angular" routerLinkActive="active">
              <span class="nav-icon nav-angular">▲</span> Angular Remote
            </a>
          </li>
          <li>
            <a routerLink="/remote-forms" routerLinkActive="active">
              <span class="nav-icon nav-forms">⚙</span> Settings
            </a>
          </li>
          <li>
            <a routerLink="/remote-charts" routerLinkActive="active">
              <span class="nav-icon nav-charts">📊</span> Charts
            </a>
          </li>
        </ul>
        <div class="sidebar-footer">
          <span class="status-dot"></span>
          Native Federation
        </div>
      </nav>
      <main class="content">
        <router-outlet />
      </main>
    </div>
  `,
  styles: [`
    .shell { display: flex; min-height: 100vh; }
    .sidebar { width: 260px; background: var(--bg-secondary); border-right: 1px solid var(--border-color); padding: 24px 16px; display: flex; flex-direction: column; flex-shrink: 0; }
    .logo { display: flex; align-items: center; gap: 12px; padding: 0 12px 24px; border-bottom: 1px solid var(--border-color); margin-bottom: 24px; }
    .logo-icon { font-size: 24px; color: var(--accent-blue); }
    .logo-text { font-size: 18px; font-weight: 700; letter-spacing: -0.02em; }
    .nav-list { list-style: none; flex: 1; }
    .nav-list li a { display: flex; align-items: center; gap: 12px; padding: 10px 12px; border-radius: 8px; color: var(--text-secondary); font-size: 14px; font-weight: 500; transition: all 0.15s ease; text-decoration: none; }
    .nav-list li a:hover { background: var(--bg-card); color: var(--text-primary); text-decoration: none; }
    .nav-list li a.active { background: var(--accent-blue); color: white; }
    .nav-icon { font-size: 16px; }
    .nav-angular { color: #dd0031; }
    .nav-forms { color: #a855f7; }
    .nav-charts { color: #3b82f6; }
    .active .nav-angular, .active .nav-forms, .active .nav-charts { color: white; }
    .sidebar-footer { display: flex; align-items: center; gap: 8px; padding: 12px; font-size: 12px; color: var(--text-secondary); border-top: 1px solid var(--border-color); margin-top: 16px; }
    .status-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--accent-green); box-shadow: 0 0 6px var(--accent-green); }
    .content { flex: 1; padding: 32px; overflow-y: auto; }
    @media (max-width: 768px) {
      .shell { flex-direction: column; }
      .sidebar { width: 100%; flex-direction: row; align-items: center; padding: 12px 16px; gap: 12px; border-right: none; border-bottom: 1px solid var(--border-color); overflow-x: auto; }
      .logo { padding: 0; border-bottom: none; margin-bottom: 0; flex-shrink: 0; }
      .logo-text { display: none; }
      .nav-list { display: flex; gap: 4px; flex: 0; }
      .nav-list li a { white-space: nowrap; padding: 8px 12px; font-size: 13px; }
      .sidebar-footer { display: none; }
      .content { padding: 16px; }
    }
  `],
})
export class AppComponent {}
