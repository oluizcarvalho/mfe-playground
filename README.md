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
│  └─────────────┘  └────────────────────────────────────────┘    │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐   │
│  │remote-angular│  │remote-forms  │  │    remote-charts     │   │
│  │  Port 4201   │  │  Port 4202   │  │      Port 4203       │   │
│  │  Counter +   │  │  Settings &  │  │  Metrics dashboard   │   │
│  │  metrics     │  │  shared state│  │  + real-time charts  │   │
│  └──────────────┘  └──────────────┘  └──────────────────────┘   │
│                                                                  │
│        ┌──────────────────────────────────────────┐             │
│        │         Global MFE Infrastructure         │             │
│        │   globalThis.__mfeSharedState             │             │
│        │   globalThis.__mfeMetricsStore            │             │
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
| `packages/host` | Angular 21, esbuild, Native Federation | 4200 | Shell app with dashboard, real-time metrics panel, and shared context display |
| `packages/remote-angular` | Angular 21, Native Federation | 4201 | Interactive counter widget — shares counter value via SharedState |
| `packages/remote-forms` | Angular 21, Native Federation | 4202 | Settings panel — writes `user:name`, `user:theme`, `user:notifications` to SharedState |
| `packages/remote-charts` | Angular 21, Native Federation | 4203 | Metrics dashboard — aggregates history from all remotes, shows Angular counter |
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

## Available Commands

```bash
make install       # Install deps for all packages
make dev           # Start host + all remotes in parallel
make build         # Build all packages
make docker-up     # Start with Docker Compose
make docker-down   # Stop Docker Compose
```

## Cross-MFE Communication

Communication between remotes happens through two global singletons initialized by the host before any remote loads.

### Shared State

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

### Persistent Metrics Store

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
│   └── shared/            # EventBus, SharedState, MetricsCollector
├── docker-compose.yml
├── Makefile
└── .github/workflows/ci.yml
```

## License

MIT
