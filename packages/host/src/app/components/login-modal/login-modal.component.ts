import { Component, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AUTH_SERVICE } from '@mfe-playground/auth';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="overlay" (click)="closed.emit()"></div>

    @if (!auth.isAuthenticated()) {
      <div class="modal">
        <div class="modal-header">
          <span class="modal-title">Sign In</span>
          <button class="modal-close" (click)="closed.emit()">&times;</button>
        </div>
        <div class="modal-body">
          <input
            type="email"
            [(ngModel)]="email"
            placeholder="Email"
            class="input"
            [disabled]="auth.isLoading()"
          />
          <input
            type="password"
            [(ngModel)]="password"
            placeholder="Password"
            class="input"
            [disabled]="auth.isLoading()"
            (keyup.enter)="login()"
          />
          @if (auth.error()) {
            <span class="error">{{ auth.error() }}</span>
          }
          <button class="btn login-btn" (click)="login()" [disabled]="auth.isLoading()">
            {{ auth.isLoading() ? 'Signing in...' : 'Sign In' }}
          </button>
          <span class="hint">admin&#64;demo.com / admin</span>
        </div>
      </div>
    } @else {
      <div class="modal">
        <div class="modal-header">
          <span class="modal-title">Account</span>
          <button class="modal-close" (click)="closed.emit()">&times;</button>
        </div>
        <div class="modal-body">
          <div class="user-info">
            <span class="avatar">{{ auth.currentUser()?.avatar }}</span>
            <div>
              <div class="user-name">{{ auth.userDisplayName() }}</div>
              <div class="user-role">{{ auth.isAdmin() ? 'Admin' : 'User' }}</div>
            </div>
          </div>
          <button class="btn logout-btn" (click)="logout()">Sign Out</button>
        </div>
      </div>
    }
  `,
  styles: [`
    .overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 1000; backdrop-filter: blur(4px); animation: fadeIn 0.2s ease; }
    .modal { position: fixed; z-index: 1001; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 16px; overflow: hidden; animation: slideUp 0.25s ease; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 380px; }
    .modal-header { display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; border-bottom: 1px solid var(--border-color); }
    .modal-title { font-size: 16px; font-weight: 700; color: var(--text-primary); }
    .modal-close { background: none; border: none; font-size: 24px; color: var(--text-secondary); cursor: pointer; padding: 0; line-height: 1; }
    .modal-close:hover { color: var(--text-primary); }
    .modal-body { padding: 20px; display: flex; flex-direction: column; gap: 12px; }

    .input { padding: 10px 14px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 8px; color: var(--text-primary); font-size: 14px; outline: none; width: 100%; box-sizing: border-box; }
    .input:focus { border-color: var(--accent-blue); }
    .input::placeholder { color: var(--text-secondary); }
    .input:disabled { opacity: 0.5; }

    .btn { width: 100%; padding: 12px; border: none; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.15s ease; margin-top: 4px; }
    .login-btn { background: var(--accent-blue); color: white; }
    .login-btn:hover { opacity: 0.9; }
    .login-btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .logout-btn { background: rgba(239,68,68,0.15); color: #ef4444; }
    .logout-btn:hover { background: rgba(239,68,68,0.25); }

    .error { font-size: 12px; color: #ef4444; padding: 0 4px; }
    .hint { font-size: 11px; color: var(--text-secondary); text-align: center; opacity: 0.7; }

    .user-info { display: flex; align-items: center; gap: 12px; padding: 12px; background: var(--bg-card); border-radius: 10px; margin-bottom: 4px; }
    .avatar { width: 40px; height: 40px; border-radius: 50%; background: var(--accent-blue); color: white; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 700; flex-shrink: 0; }
    .user-name { font-size: 13px; font-weight: 600; color: var(--text-primary); }
    .user-role { font-size: 11px; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em; }

    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { opacity: 0; transform: translate(-50%, -45%); } to { opacity: 1; transform: translate(-50%, -50%); } }

    @media (max-width: 768px) {
      .modal {
        top: auto; left: 0; right: 0; bottom: 0;
        transform: none; width: 100%;
        border-radius: 20px 20px 0 0;
        max-height: 90vh;
      }
      .modal-header { padding: 20px 20px 16px; }
      .modal-body { padding: 16px 20px 32px; }
      .modal-body .login-btn { padding: 14px; font-size: 15px; }
      .input { padding: 12px 16px; font-size: 16px; border-radius: 10px; }

      @keyframes slideUp { from { opacity: 0; transform: translateY(100%); } to { opacity: 1; transform: translateY(0); } }
    }
  `],
})
export class LoginModalComponent {
  auth = inject(AUTH_SERVICE);
  closed = output();

  email = 'admin@demo.com';
  password = '';

  async login(): Promise<void> {
    try {
      await this.auth.login({ email: this.email, password: this.password });
      this.closed.emit();
      this.email = '';
      this.password = '';
    } catch {
      // error is displayed via auth.error() signal
    }
  }

  logout(): void {
    this.auth.logout();
    this.closed.emit();
  }
}
