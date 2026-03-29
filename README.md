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
┌──────────────────────────────────────────────────────────────────────┐
│                   BROWSER (Shell / Host)                    │
│                Angular 21 + Native Federation                │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐                         │
│  │  Dashboard   │  │ Metrics Panel │                         │
│  │  (dark theme)│  │ (real-time)   │                         │
│  └──────────────┘  └──────────────┘                         │
│                                                              │
│              ┌──────────────────────┐                         │
│              │    Shared Library     │                         │
│              │  • EventBus (Custom)  │                         │
│              │  • State (Broadcast)  │                         │
│              │  • Metrics Collector  │                         │
│              └──────────────────────┘                         │
│                          │                                   │
│                          ▼                                   │
│              ┌──────────────────────┐                         │
│              │    remote-angular      │                         │
│              │  Angular 21 · Port 4201│                         │
│              │  remoteEntry.json     │                         │
│              │  exposes ./Component  │                         │
│              └──────────────────────┘                         │
└──────────────────────────────────────────────────────────────────────┘
```

### Native Federation vs Traditional Module Federation

```
┌──────────────────────────────────────────────────────────────────────┐
│        Traditional (Webpack Module Federation)                 │
│                                                               │
│  Source ──► Webpack ──► ModuleFederationPlugin ──► Chunks      │
│                                                               │
│  • Requires Webpack for ALL apps                             │
│  • Tightly coupled to Webpack internals                      │
│  • Shared deps resolved at build time                        │
└──────────────────────────────────────────────────────────────────────┘

                            vs.

┌──────────────────────────────────────────────────────────────────────┐
│   Native Federation (@angular-architects/native-federation)   │
│                                                               │
│  Source ──► esbuild ──► ES Modules ──► Import Maps (runtime) │
│                                                               │
│  • Uses Angular’s esbuild (no Webpack)                       │
│  • Based on browser-native ES modules + import maps          │
│  • Shared deps resolved at runtime via import maps           │
│  • remoteEntry.json → declarative, JSON-based contract       │
└──────────────────────────────────────────────────────────────────────┘
```

## Packages

| Package | Tech | Port | Description |
|---------|------|------|-------------|
| `packages/host` | Angular 21, esbuild, Native Federation | 4200 | Shell app with dark-themed dashboard and real-time metrics panel |
| `packages/remote-angular` | Angular 21, Native Federation | 4201 | Remote exposing a widget component via `remoteEntry.json` |
| `packages/shared` | TypeScript | — | Event bus, shared state, metrics collector |

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
make dev           # Start host + remote-angular in parallel
make build         # Build all packages
make docker-up     # Start with Docker Compose
make docker-down   # Stop Docker Compose
```

## Cross-MFE Communication

The `packages/shared` library provides:

### Event Bus
```typescript
import { eventBus } from '@mfe-playground/shared';
eventBus.emit('user:login', { userId: '123' });
const unsub = eventBus.on('user:login', (data) => console.log(data));
```

### Shared State (BroadcastChannel)
```typescript
import { sharedState } from '@mfe-playground/shared';
sharedState.set('theme', 'dark');
sharedState.subscribe('theme', (value) => console.log(value));
```

### Metrics Collector
```typescript
import { metrics } from '@mfe-playground/shared';
metrics.record('remote-angular', 'load-time', 142);
metrics.subscribe((metric) => console.log(metric));
```

## Project Structure

```
mfe-playground/
├── packages/
│   ├── host/              # Angular 21 shell
│   ├── remote-angular/    # Angular 21 NF remote
│   └── shared/            # Cross-MFE utilities
├── docker-compose.yml
├── Makefile
└── .github/workflows/ci.yml
```

## License

MIT
