import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AUTH_SERVICE } from '@mfe-playground/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
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

        <div class="auth-section">
          @if (auth.isAuthenticated()) {
            <div class="auth-user">
              <span class="auth-avatar">{{ auth.currentUser()?.avatar }}</span>
              <div class="auth-info">
                <span class="auth-name">{{ auth.userDisplayName() }}</span>
                <span class="auth-role">{{ auth.isAdmin() ? 'Admin' : 'User' }}</span>
              </div>
            </div>
            <button class="auth-btn logout-btn" (click)="logout()">Sign Out</button>
          } @else {
            @if (showLoginForm) {
              <div class="login-form">
                <input
                  type="email"
                  [(ngModel)]="email"
                  placeholder="Email"
                  class="login-input"
                  [disabled]="auth.isLoading()"
                />
                <input
                  type="password"
                  [(ngModel)]="password"
                  placeholder="Password"
                  class="login-input"
                  [disabled]="auth.isLoading()"
                  (keyup.enter)="login()"
                />
                @if (auth.error()) {
                  <span class="login-error">{{ auth.error() }}</span>
                }
                <div class="login-actions">
                  <button class="auth-btn login-btn" (click)="login()" [disabled]="auth.isLoading()">
                    {{ auth.isLoading() ? 'Signing in...' : 'Sign In' }}
                  </button>
                  <button class="auth-btn cancel-btn" (click)="showLoginForm = false" [disabled]="auth.isLoading()">Cancel</button>
                </div>
                <span class="login-hint">admin&#64;demo.com / admin</span>
              </div>
            } @else {
              <button class="auth-btn signin-btn" (click)="showLoginForm = true">
                <span class="lock-icon">🔒</span> Sign In
              </button>
            }
          }
        </div>

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

    .auth-section { padding: 16px 0; border-top: 1px solid var(--border-color); margin-top: 16px; }
    .auth-user { display: flex; align-items: center; gap: 10px; padding: 8px 12px; margin-bottom: 8px; }
    .auth-avatar { width: 32px; height: 32px; border-radius: 50%; background: var(--accent-blue); color: white; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; flex-shrink: 0; }
    .auth-info { display: flex; flex-direction: column; min-width: 0; }
    .auth-name { font-size: 13px; font-weight: 600; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .auth-role { font-size: 11px; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em; }
    .auth-btn { width: 100%; padding: 8px 12px; border: none; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.15s ease; }
    .signin-btn { background: var(--accent-blue); color: white; display: flex; align-items: center; justify-content: center; gap: 8px; }
    .signin-btn:hover { opacity: 0.9; }
    .login-btn { background: var(--accent-green); color: white; }
    .login-btn:hover { opacity: 0.9; }
    .login-btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .logout-btn { background: rgba(239,68,68,0.15); color: #ef4444; }
    .logout-btn:hover { background: rgba(239,68,68,0.25); }
    .cancel-btn { background: var(--bg-card); color: var(--text-secondary); }
    .cancel-btn:hover { background: var(--bg-card-hover); }
    .login-form { display: flex; flex-direction: column; gap: 8px; }
    .login-input { padding: 8px 12px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 6px; color: var(--text-primary); font-size: 13px; outline: none; }
    .login-input:focus { border-color: var(--accent-blue); }
    .login-input::placeholder { color: var(--text-secondary); }
    .login-input:disabled { opacity: 0.5; }
    .login-error { font-size: 11px; color: #ef4444; padding: 0 4px; }
    .login-actions { display: flex; gap: 6px; }
    .login-actions .auth-btn { flex: 1; }
    .login-hint { font-size: 10px; color: var(--text-secondary); text-align: center; opacity: 0.7; }
    .lock-icon { font-size: 14px; }

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
      .auth-section { display: none; }
      .sidebar-footer { display: none; }
      .content { padding: 16px; }
    }
  `],
})
export class AppComponent {
  auth = inject(AUTH_SERVICE);
  showLoginForm = false;
  email = 'admin@demo.com';
  password = 'admin';

  async login(): Promise<void> {
    try {
      await this.auth.login({ email: this.email, password: this.password });
      this.showLoginForm = false;
      this.email = '';
      this.password = '';
    } catch {
      // error is displayed via auth.error() signal
    }
  }

  logout(): void {
    this.auth.logout();
  }
}
