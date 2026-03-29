# MFE Playground

> A production-ready Micro Frontends monorepo powered by **Native Federation** — no Webpack required.

[![CI](https://github.com/oluizcarvalho/mfe-playground/actions/workflows/ci.yml/badge.svg)](https://github.com/oluizcarvalho/mfe-playground/actions/workflows/ci.yml)
[![Angular](https://img.shields.io/badge/Angular-21-dd0031)](https://angular.dev)
[![React](https://img.shields.io/badge/React-19-61dafb)](https://react.dev)
[![Vue](https://img.shields.io/badge/Vue-3-4fc08d)](https://vuejs.org)
[![Native Federation](https://img.shields.io/badge/Native_Federation-esbuild-blueviolet)](https://www.npmjs.com/package/@angular-architects/native-federation)

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                        BROWSER (Shell / Host)                       │
│                     Angular 21 + Native Federation                  │
│                                                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │   Dashboard   │  │   Metrics    │  │   Remote     │              │
│  │  (Dark Theme) │  │    Panel     │  │  Wrappers    │              │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘              │
│         │                 │                  │                       │
│         └─────────────────┼──────────────────┘                      │
│                           │                                         │
│              ┌────────────▼────────────┐                            │
│              │     Shared Library       │                            │
│              │  • EventBus (Custom)     │                            │
│              │  • State (Broadcast)     │                            │
│              │  • Metrics Collector     │                            │
│              └────────────┬────────────┘                            │
│                           │                                         │
│         ┌─────────────────┼──────────────────┐                      │
│         ▼                 ▼                   ▼                      │
│  ┌─────────────┐  ┌─────────────┐  ┌──────────────┐               │
│  │   Remote     │  │   Remote    │  │    Remote     │               │
│  │   Angular    │  │   React     │  │     Vue       │               │
│  │  (NF Remote) │  │  (Vite+NF)  │  │   (Vite+NF)  │               │
│  └─────────────┘  └─────────────┘  └──────────────┘               │
└─────────────────────────────────────────────────────────────────────┘
```

### Native Federation vs Traditional Module Federation

```
┌─────────────────────────────────────────────────────────────────────┐
│           Traditional (Webpack Module Federation)                    │
│                                                                     │
│  Source ──► Webpack ──► ModuleFederationPlugin ──► Webpack Chunks   │
│                              │                                      │
│              Requires Webpack for ALL remotes                       │
│              Tightly coupled to Webpack internals                   │
│              Shared deps resolved at build time                     │
│              Version mismatches = runtime errors                    │
└─────────────────────────────────────────────────────────────────────┘

                            vs.

┌─────────────────────────────────────────────────────────────────────┐
│           Native Federation (@angular-architects/native-federation) │
│                                                                     │
│  Source ──► Any Bundler ──► ES Modules ──► Import Maps (runtime)   │
│            (esbuild/Vite)       │                                   │
│                                 │                                   │
│              Bundler-agnostic: esbuild, Vite, Rollup, etc.         │
│              Based on browser-native ES modules & import maps      │
│              Shared deps resolved at runtime via import maps       │
│              Framework-agnostic: Angular, React, Vue in one shell  │
└─────────────────────────────────────────────────────────────────────┘
```

## Packages

| Package | Tech | Port | Description |
|---------|------|------|-------------|
| `packages/host` | Angular 21, esbuild, Native Federation | 4200 | Shell app with dark-themed dashboard and real-time metrics panel |
| `packages/remote-angular` | Angular 21, Native Federation | 4201 | Angular remote exposing a widget component |
| `packages/remote-react` | React 19, Vite, federation plugin | 4202 | React remote with Vite federation plugin |
| `packages/remote-vue` | Vue 3, Vite, federation plugin | 4203 | Vue remote with Vite federation plugin |
| `packages/shared` | TypeScript, vanilla | — | Event bus, shared state, metrics collector |

## Quick Start

```bash
# Install all dependencies
make install

# Start everything (dev mode)
make dev

# Or with Docker
docker compose up
```

Then open **http://localhost:4200** to see the dashboard.

## Available Commands

```bash
make install       # Install deps for all packages
make dev           # Start all packages in dev mode (parallel)
make build         # Build all packages for production
make test          # Run tests across all packages
make lint          # Lint all packages
make clean         # Remove node_modules and dist from all packages
make docker-up     # Start with Docker Compose
make docker-down   # Stop Docker Compose
```

## Communication Between Micro Frontends

The `packages/shared` library provides three communication mechanisms:

### 1. Event Bus (CustomEvents)
```typescript
import { eventBus } from '@mfe-playground/shared';

// Publish
eventBus.emit('user:login', { userId: '123' });

// Subscribe
const unsub = eventBus.on('user:login', (data) => console.log(data));
unsub(); // cleanup
```

### 2. Shared State (BroadcastChannel)
```typescript
import { sharedState } from '@mfe-playground/shared';

// Set state (broadcasts to all MFEs)
sharedState.set('theme', 'dark');

// Get state
const theme = sharedState.get('theme');

// Subscribe to changes
sharedState.subscribe('theme', (value) => console.log(value));
```

### 3. Metrics Collector
```typescript
import { metrics } from '@mfe-playground/shared';

// Record a metric
metrics.record('remote-angular', 'load-time', 142);

// Get all metrics
const all = metrics.getAll();

// Subscribe to new metrics
metrics.subscribe((metric) => console.log(metric));
```

## Project Structure

```
mfe-playground/
├── packages/
│   ├── host/                  # Angular 21 shell (Native Federation)
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── components/
│   │   │   │   │   ├── dashboard/
│   │   │   │   │   ├── metrics-panel/
│   │   │   │   │   └── remote-wrapper/
│   │   │   └── federation.manifest.json
│   │   └── federation.config.js
│   ├── remote-angular/        # Angular remote
│   ├── remote-react/          # React + Vite remote
│   ├── remote-vue/            # Vue + Vite remote
│   └── shared/                # Cross-MFE communication
├── docker-compose.yml
├── Makefile
└── .github/workflows/ci.yml
```

## License

MIT
