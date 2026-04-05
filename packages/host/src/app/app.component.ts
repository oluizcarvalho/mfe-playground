import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MobileNavComponent } from './components/mobile-nav/mobile-nav.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, MobileNavComponent, LoginModalComponent],
  template: `
    <div class="shell">
      <app-sidebar (openLogin)="showLoginModal = true" />
      <main class="content">
        <router-outlet />
      </main>
      <app-mobile-nav (openLogin)="showLoginModal = true" />
      @if (showLoginModal) {
        <app-login-modal (closed)="showLoginModal = false" />
      }
    </div>
  `,
  styles: [`
    .shell { display: flex; min-height: 100vh; }
    .content { flex: 1; padding: 32px; overflow-y: auto; }

    @media (max-width: 768px) {
      .content { padding: 16px; padding-bottom: 80px; }
    }
  `],
})
export class AppComponent {
  showLoginModal = false;
}
