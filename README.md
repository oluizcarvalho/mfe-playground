# MFE Playground

> A production-ready Micro Frontends monorepo powered by **Native Federation** — no Webpack required.

[![CI](https://github.com/oluizcarvalho/mfe-playground/actions/workflows/ci.yml/badge.svg)](https://github.com/oluizcarvalho/mfe-playground/actions/workflows/ci.yml)
[![Angular](https://img.shields.io/badge/Angular-21-dd0031)](https://angular.dev)
[![Native Federation](https://img.shields.io/badge/Native_Federation-21-blueviolet)](https://www.npmjs.com/package/@angular-architects/native-federation)
[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-blue)](https://oluizcarvalho.github.io/mfe-playground/)

---

## Live Demo

**[https://oluizcarvalho.github.io/mfe-playground/](https://oluizcarvalho.github.io/mfe-playground/)**

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                  HOST (Shell — Port 4200)                        │
│            Angular 21 + Native Federation                        │
│                                                                  │
│  ┌─────────────┐  ┌────────────────────────────────────────┐    │
│  │  Dashboard  │  │         Metrics Panel (real-time)       │    │
│  │  Shared ctx │  │  load-time · render-time · interaction  │    │
│  │  Auth events│  │  auth events (login/logout/refresh)     │    │
│  └─────────────┘  └────────────────────────────────────────┘    │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐   │
│  │remote-angular│  │remote-forms  │  │    remote-charts     │   │
│  │  Port 4201   │  │  Port 4202   │  │      Port 4203       │   │
│  │  Counter +   │  │  Settings &  │  │  Metrics dashboard   │   │
│  │  auth badge  │  │  account mgmt│  │  + auth events card  │   │
│  └──────────────┘  └──────────────┘  └──────────────────────┘   │
│                                                                  │
│        ┌──────────────────────────────────────────┐             │
│        │         Global MFE Infrastructure         │             │
│        │   globalThis.__mfeSharedState             │             │
│        │   globalThis.__mfeMetricsStore            │             │
│        │   globalThis.__mfeAuthService             │             │
│        └──────────────────────────────────────────┘             │
└─────────────────────────────────────────────────────────────────┘
```

### Native Federation vs Traditional Module Federation

```
┌─────────────────────────────────────────────────────────────────┐
│         Traditional (Webpack Module Federation)                  │
│                                                                  │
│  Source ──► Webpack ──► ModuleFederationPlugin ──► Chunks        │
│                                                                  │
│  • Requires Webpack for ALL apps                                 │
│  • Tightly coupled to Webpack internals                          │
│  • Shared deps resolved at build time                            │
└─────────────────────────────────────────────────────────────────┘

                            vs.

┌─────────────────────────────────────────────────────────────────┐
│   Native Federation (@angular-architects/native-federation)      │
│                                                                  │
│  Source ──► esbuild ──► ES Modules ──► Import Maps (runtime)     │
│                                                                  │
│  • Uses Angular's esbuild (no Webpack)                           │
│  • Based on browser-native ES modules + import maps              │
│  • Shared deps resolved at runtime via import maps               │
│  • remoteEntry.json → declarative, JSON-based contract           │
└─────────────────────────────────────────────────────────────────┘
```

## Packages

| Package | Tech | Port | Description |
|---------|------|------|-------------|
| `packages/host` | Angular 21, esbuild, Native Federation | 4200 | Shell app with dashboard, auth UI, real-time metrics panel, and shared context display |
| `packages/remote-angular` | Angular 21, Native Federation | 4201 | Interactive counter widget — shares counter value via SharedState, shows auth status |
| `packages/remote-forms` | Angular 21, Native Federation | 4202 | Settings panel — writes `user:name`, `user:theme`, `user:notifications` to SharedState, manages account |
| `packages/remote-charts` | Angular 21, Native Federation | 4203 | Metrics dashboard — aggregates history from all remotes, tracks auth events |
| `packages/auth` | TypeScript, Angular Signals, RxJS | — | Shared auth library with signal-based state and Subject event streams |
| `packages/shared` | TypeScript | — | EventBus, SharedState, and MetricsCollector utilities |

## Quick Start

```bash
# Install all dependencies
make install

# Start everything (dev mode)
make dev

# Or with Docker
docker compose up
```

Open **http://localhost:4200**.

### Demo Credentials

| Email | Password | Role |
|-------|----------|------|
| `admin@demo.com` | `admin` | Admin + User |
| `user@demo.com` | `user` | User |

## Available Commands

```bash
make install       # Install deps for all packages
make dev           # Start host + all remotes in parallel
make build         # Build all packages
make docker-up     # Start with Docker Compose
make docker-down   # Stop Docker Compose
```

## Cross-MFE Communication

The project demonstrates **three complementary patterns** for sharing state across micro-frontends:

### 1. Angular Signals (via `@mfe-playground/auth`)

The `AuthService` uses Angular's reactive primitives to share authentication state across all federated modules. Because Native Federation uses `shareAll({ singleton: true })`, the service instance is shared — **signals from one MFE are the same signals in another**.

```typescript
import { AUTH_SERVICE } from '@mfe-playground/auth';

// In any component across any MFE:
auth = inject(AUTH_SERVICE);

// Read reactive state (updates automatically across all MFEs)
auth.isAuthenticated()   // Signal<boolean>
auth.userDisplayName()   // Signal<string>
auth.isAdmin()           // Signal<boolean> (computed)

// Subscribe to event streams (RxJS Subjects)
auth.authEvents$.subscribe(event => {
  console.log(event.type, event.user?.name);
});

// Trigger actions
await auth.login({ email: 'admin@demo.com', password: 'admin' });
auth.logout();
```

**Why this works:** `shareAll({ singleton: true })` ensures a single `@angular/core` instance across all federated modules. The `AuthService` singleton (via `globalThis`) means all MFEs read and write to the same signals. Changes are propagated instantly through Angular's change detection — no BroadcastChannel, no manual subscriptions.

**Signals vs Subjects — when to use each:**

| Pattern | Use case | Example in this project |
|---------|----------|------------------------|
| `signal()` / `computed()` | Synchronous reactive state bound to templates | `isAuthenticated`, `currentUser`, `userDisplayName` |
| `Subject` | Async event streams for side effects | `authEvents$` — login/logout/refresh events for metrics |
| `BehaviorSubject` | Current value + observable stream | `authState$` — current user as Observable for RxJS consumers |

### 2. BroadcastChannel (via SharedState)

A `BroadcastChannel`-backed key/value store available on `globalThis.__mfeSharedState`. Any remote can read, write, or subscribe to keys:

```typescript
const state = (globalThis as any).__mfeSharedState;

// Write
state.set('user:name', 'Alice');

// Read
const name = state.get('user:name');

// Subscribe (returns unsubscribe fn)
const unsub = state.subscribe('user:name', (value) => {
  console.log('Name changed:', value);
});
```

**Keys in use:**

| Key | Writer | Readers |
|-----|--------|---------|
| `user:name` | remote-forms | host dashboard, remote-angular, remote-charts |
| `user:theme` | remote-forms | host dashboard |
| `user:notifications` | remote-forms | host dashboard |
| `counter:value` | remote-angular | host dashboard, remote-charts |
| `auth:user` | auth service | host dashboard |
| `auth:status` | auth service | host dashboard |
| `auth:roles` | auth service | host dashboard |

### 3. Persistent Metrics Store

All metrics are stored in `globalThis.__mfeMetricsStore` (a plain array) AND dispatched as `CustomEvent('mfe:metric')` on `window`. Components that mount later can read the full history:

```typescript
// Record a metric (pushes to global store + dispatches CustomEvent)
window.dispatchEvent(new CustomEvent('mfe:metric', {
  detail: { source: 'remote-angular', name: 'load-time', value: 42, timestamp: Date.now() }
}));

// Read full history from any component
const history = (globalThis as any).__mfeMetricsStore;

// Subscribe to live updates
window.addEventListener('mfe:metric', (e) => {
  const metric = (e as CustomEvent).detail;
});
```

### Event Bus (shared library)

The `packages/shared` library also exports a generic `EventBus` for custom events:

```typescript
import { eventBus } from '@mfe-playground/shared';
eventBus.emit('user:login', { userId: '123' });
const unsub = eventBus.on('user:login', (data) => console.log(data));
```

## How Remotes Interact

```
auth service (login/logout)
  └─► signal update → all MFEs react instantly via Angular change detection
  └─► authEvents$.next() → remote-charts records auth metrics
  └─► bridge → state.set('auth:*') → host dashboard Shared Context

remote-angular (counter++)
  └─► state.set('counter:value', n)
        ├─► host dashboard updates counter display
        └─► remote-charts updates Angular Counter card

remote-forms (name change)
  └─► state.set('user:name', 'Alice')
        ├─► remote-angular shows "Hi, Alice" badge
        ├─► remote-charts shows user badge
        └─► host dashboard shows Shared Context

any remote (ngOnInit)
  └─► recordMetric('remote-x', 'load-time', ms)
        ├─► pushes to globalThis.__mfeMetricsStore (persists across navigation)
        ├─► dispatches CustomEvent (live listeners)
        ├─► host metrics panel shows live stream
        └─► remote-charts aggregates all historical data
```

## Project Structure

```
mfe-playground/
├── packages/
│   ├── host/              # Angular 21 shell — initializes global MFE infrastructure
│   ├── remote-angular/    # Counter widget, shares state via SharedState
│   ├── remote-forms/      # Settings panel, source of truth for user preferences
│   ├── remote-charts/     # Metrics dashboard, aggregates all remote data
│   ├── auth/              # Shared auth library — Angular Signals + RxJS Subjects
│   └── shared/            # EventBus, SharedState, MetricsCollector
├── docker-compose.yml
├── Makefile
└── .github/workflows/ci.yml
```

## License

MIT
