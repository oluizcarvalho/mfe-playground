import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-remote-error',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="error-card">
      <div class="error-icon">!</div>
      <h3>Remote Module Unavailable</h3>
      <p>This micro frontend could not be loaded. Make sure the remote is running or has been deployed.</p>
      <a routerLink="/" class="back-link">Back to Dashboard</a>
    </div>
  `,
  styles: [`
    .error-card { max-width: 480px; margin: 60px auto; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px; padding: 40px; text-align: center; }
    .error-icon { width: 48px; height: 48px; border-radius: 50%; background: rgba(239,68,68,0.15); color: var(--accent-red); font-size: 24px; font-weight: 800; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }
    h3 { font-size: 18px; font-weight: 700; margin-bottom: 12px; }
    p { color: var(--text-secondary); font-size: 14px; line-height: 1.6; margin-bottom: 24px; }
    .back-link { display: inline-block; padding: 10px 20px; background: var(--accent-blue); color: white; border-radius: 8px; font-size: 14px; font-weight: 600; text-decoration: none; }
    .back-link:hover { text-decoration: none; opacity: 0.9; }
  `],
})
export class RemoteErrorComponent {}
