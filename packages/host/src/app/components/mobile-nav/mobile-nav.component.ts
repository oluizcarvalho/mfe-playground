import { Component, inject, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AUTH_SERVICE } from '@mfe-playground/auth';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="mobile-nav">
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
        <span class="nav-icon">▦</span>
        <span class="nav-label">Home</span>
      </a>
      <a routerLink="/remote-angular" routerLinkActive="active">
        <span class="nav-icon">▲</span>
        <span class="nav-label">Angular</span>
      </a>
      <a routerLink="/remote-forms" routerLinkActive="active">
        <span class="nav-icon">⚙</span>
        <span class="nav-label">Settings</span>
      </a>
      <a routerLink="/remote-charts" routerLinkActive="active">
        <span class="nav-icon">📊</span>
        <span class="nav-label">Charts</span>
      </a>
      <button class="nav-auth" (click)="openLogin.emit()">
        @if (auth.isAuthenticated()) {
          <span class="nav-avatar">{{ auth.currentUser()?.avatar }}</span>
          <span class="nav-label">Account</span>
        } @else {
          <span class="nav-icon">👤</span>
          <span class="nav-label">Sign In</span>
        }
      </button>
    </nav>
  `,
  styles: [`
    :host { display: none; }

    .mobile-nav {
      display: flex; position: fixed; bottom: 0; left: 0; right: 0;
      background: var(--bg-secondary); border-top: 1px solid var(--border-color);
      z-index: 100; padding: 6px 0 env(safe-area-inset-bottom, 8px);
    }
    .mobile-nav a {
      flex: 1; display: flex; flex-direction: column; align-items: center;
      gap: 2px; padding: 8px 4px; text-decoration: none;
      color: var(--text-secondary); font-size: 10px; font-weight: 500;
      transition: color 0.15s ease;
    }
    .mobile-nav a.active { color: var(--accent-blue); }
    .nav-icon { font-size: 20px; }
    .nav-label { font-size: 10px; }
    .nav-auth {
      flex: 1; display: flex; flex-direction: column; align-items: center;
      gap: 2px; padding: 8px 4px; background: none; border: none;
      color: var(--text-secondary); font-weight: 500; cursor: pointer;
      transition: color 0.15s ease;
    }
    .nav-auth:active { color: var(--accent-blue); }
    .nav-avatar {
      width: 24px; height: 24px; border-radius: 50%;
      background: var(--accent-blue); color: white;
      display: flex; align-items: center; justify-content: center;
      font-size: 11px; font-weight: 700;
    }

    @media (max-width: 768px) {
      :host { display: block; }
    }
  `],
})
export class MobileNavComponent {
  auth = inject(AUTH_SERVICE);
  openLogin = output();
}
