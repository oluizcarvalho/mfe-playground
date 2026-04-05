import { signal, computed } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import type { User, Credentials, AuthEvent } from './auth.models.js';

const GLOBAL_KEY = '__mfeAuthService';
const SHARED_STATE_KEY = '__mfeSharedState';

/** Mock user database for demo purposes */
const MOCK_USERS: Record<string, { password: string; user: User }> = {
  'admin@demo.com': {
    password: 'admin',
    user: { id: '1', name: 'Admin User', email: 'admin@demo.com', roles: ['admin', 'user'], avatar: 'A' },
  },
  'user@demo.com': {
    password: 'user',
    user: { id: '2', name: 'Regular User', email: 'user@demo.com', roles: ['user'], avatar: 'U' },
  },
};

function generateToken(): string {
  return `mfe_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
}

function syncToSharedState(key: string, value: unknown): void {
  const state = (globalThis as Record<string, unknown>)[SHARED_STATE_KEY] as
    | { set(key: string, value: unknown): void }
    | undefined;
  state?.set(key, value);
}

export class AuthService {
  // --- Angular Signals (reactive state) ---
  readonly currentUser = signal<User | null>(null);
  readonly token = signal<string | null>(null);
  readonly isLoading = signal(false);
  readonly error = signal<string | null>(null);

  // --- Computed Signals (derived state) ---
  readonly isAuthenticated = computed(() => this.currentUser() !== null);
  readonly userDisplayName = computed(() => this.currentUser()?.name ?? 'Guest');
  readonly isAdmin = computed(() => this.currentUser()?.roles.includes('admin') ?? false);

  // --- RxJS Subjects (event streams) ---
  readonly authEvents$ = new Subject<AuthEvent>();
  readonly authState$ = new BehaviorSubject<User | null>(null);

  private refreshTimer: ReturnType<typeof setInterval> | null = null;

  private constructor() {
    this.startTokenRefreshTimer();
  }

  /** Singleton: ensures one instance across all federated modules */
  static getInstance(): AuthService {
    const existing = (globalThis as Record<string, unknown>)[GLOBAL_KEY] as AuthService | undefined;
    if (existing) {
      return existing;
    }
    const instance = new AuthService();
    (globalThis as Record<string, unknown>)[GLOBAL_KEY] = instance;
    return instance;
  }

  /** Simulate login with mock delay */
  async login(credentials: Credentials): Promise<void> {
    this.isLoading.set(true);
    this.error.set(null);

    try {
      // Simulate network delay (800-1500ms)
      await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 700));

      const entry = MOCK_USERS[credentials.email];
      if (!entry || entry.password !== credentials.password) {
        throw new Error('Invalid email or password');
      }

      const newToken = generateToken();
      this.currentUser.set(entry.user);
      this.token.set(newToken);
      this.authState$.next(entry.user);

      this.emitEvent({ type: 'login', user: entry.user });

      // Sync to BroadcastChannel shared state
      syncToSharedState('auth:user', entry.user.name);
      syncToSharedState('auth:status', 'authenticated');
      syncToSharedState('auth:roles', entry.user.roles.join(', '));
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Login failed';
      this.error.set(message);
      this.emitEvent({ type: 'error', error: message });
      throw err;
    } finally {
      this.isLoading.set(false);
    }
  }

  /** Logout and clear all state */
  logout(): void {
    const user = this.currentUser();
    this.currentUser.set(null);
    this.token.set(null);
    this.error.set(null);
    this.authState$.next(null);

    this.emitEvent({ type: 'logout', user: user ?? undefined });

    syncToSharedState('auth:user', null);
    syncToSharedState('auth:status', 'guest');
    syncToSharedState('auth:roles', null);
  }

  /** Simulate token refresh */
  async refreshToken(): Promise<void> {
    if (!this.isAuthenticated()) return;

    const newToken = generateToken();
    this.token.set(newToken);

    this.emitEvent({ type: 'token-refresh', user: this.currentUser() ?? undefined });
  }

  /** Check if the current user has a specific role */
  hasRole(role: string): boolean {
    return this.currentUser()?.roles.includes(role) ?? false;
  }

  private emitEvent(partial: Omit<AuthEvent, 'timestamp'>): void {
    const event: AuthEvent = { ...partial, timestamp: Date.now() };
    this.authEvents$.next(event);

    // Also record as MFE metric
    const metricsStore = (globalThis as Record<string, unknown>)['__mfeMetricsStore'] as
      | Array<{ source: string; name: string; value: number; timestamp: number }>
      | undefined;
    if (metricsStore) {
      const metric = { source: 'auth', name: event.type, value: 1, timestamp: event.timestamp };
      metricsStore.push(metric);
      window.dispatchEvent(new CustomEvent('mfe:metric', { detail: metric }));
    }
  }

  private startTokenRefreshTimer(): void {
    // Auto-refresh token every 60 seconds while authenticated
    this.refreshTimer = setInterval(() => {
      if (this.isAuthenticated()) {
        this.refreshToken();
      }
    }, 60_000);
  }

  destroy(): void {
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer);
      this.refreshTimer = null;
    }
    this.authEvents$.complete();
    this.authState$.complete();
  }
}
