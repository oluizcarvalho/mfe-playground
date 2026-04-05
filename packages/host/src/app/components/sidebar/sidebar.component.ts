import { Component, inject, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AUTH_SERVICE } from '@mfe-playground/auth';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="sidebar">
      <div class="logo">
        <span class="logo-icon">◆</span>
        <span class="logo-text">MFE Playground</span>
      </div>
      <ul class="nav-list">
        <li>
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
            <span class="nav-icon">▦</span> <span class="nav-label">Dashboard</span>
          </a>
        </li>
        <li>
          <a routerLink="/remote-angular" routerLinkActive="active">
            <span class="nav-icon nav-angular">▲</span> <span class="nav-label">Angular Remote</span>
          </a>
        </li>
        <li>
          <a routerLink="/remote-forms" routerLinkActive="active">
            <span class="nav-icon nav-forms">⚙</span> <span class="nav-label">Settings</span>
          </a>
        </li>
        <li>
          <a routerLink="/remote-charts" routerLinkActive="active">
            <span class="nav-icon nav-charts">📊</span> <span class="nav-label">Charts</span>
          </a>
        </li>
      </ul>

      <div class="auth-section">
        @if (auth.isAuthenticated()) {
          <div class="auth-user">
            <span class="auth-avatar">{{ auth.currentUser()?.avatar }}</span>
            <div class="auth-info">
              <span class="auth-name">{{ auth.userDisplayName() }}</span>
              <span class="auth-role">{{ auth.isAdmin() ? 'Admin' : 'User' }}</span>
            </div>
          </div>
          <button class="auth-btn logout-btn" (click)="auth.logout()">Sign Out</button>
        } @else {
          <button class="auth-btn signin-btn" (click)="openLogin.emit()">
            <span class="lock-icon">🔒</span> Sign In
          </button>
        }
      </div>

      <div class="sidebar-footer">
        <span class="status-dot"></span>
        Native Federation
      </div>
    </nav>
  `,
  styles: [`
    .sidebar { width: 260px; background: var(--bg-secondary); border-right: 1px solid var(--border-color); padding: 24px 16px; display: flex; flex-direction: column; flex-shrink: 0; height: 100vh; box-sizing: border-box; }
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

    .auth-section { padding: 16px 0; border-top: 1px solid var(--border-color); margin-top: 16px; }
    .auth-user { display: flex; align-items: center; gap: 10px; padding: 8px 12px; margin-bottom: 8px; }
    .auth-avatar { width: 32px; height: 32px; border-radius: 50%; background: var(--accent-blue); color: white; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; flex-shrink: 0; }
    .auth-info { display: flex; flex-direction: column; min-width: 0; }
    .auth-name { font-size: 13px; font-weight: 600; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .auth-role { font-size: 11px; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em; }
    .auth-btn { width: 100%; padding: 8px 12px; border: none; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.15s ease; }
    .signin-btn { background: var(--accent-blue); color: white; display: flex; align-items: center; justify-content: center; gap: 8px; }
    .signin-btn:hover { opacity: 0.9; }
    .logout-btn { background: rgba(239,68,68,0.15); color: #ef4444; }
    .logout-btn:hover { background: rgba(239,68,68,0.25); }
    .lock-icon { font-size: 14px; }

    .sidebar-footer { display: flex; align-items: center; gap: 8px; padding: 12px; font-size: 12px; color: var(--text-secondary); border-top: 1px solid var(--border-color); margin-top: 16px; }
    .status-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--accent-green); box-shadow: 0 0 6px var(--accent-green); }

    @media (max-width: 768px) {
      :host { display: none; }
    }
  `],
})
export class SidebarComponent {
  auth = inject(AUTH_SERVICE);
  openLogin = output();
}
