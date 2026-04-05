# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Angular 21 micro-frontends monorepo using **Native Federation** (esbuild-based, no Webpack). npm workspaces manage all packages under `packages/`.

## Commands

```bash
npm install              # Install all workspace dependencies
npm run dev              # Start host + all remotes concurrently (ports 4200-4203)
npm run build            # Build all packages in dependency order (shared → auth → remotes → host)

# Per-package
npm run dev -w packages/host              # Host only (port 4200)
npm run dev -w packages/remote-angular    # Single remote (port 4201)
npm run build -w packages/shared          # Build shared lib
npm run build -w packages/auth            # Build auth lib
npm run test -w packages/host             # Run tests for one package
npm run lint -w packages/host             # Lint one package
```

**Build order matters:** `shared` and `auth` must be built before Angular packages that depend on them.

## Architecture

- **Host** (`packages/host`, port 4200): Shell app that loads remotes at runtime via `federation.manifest.json`. Contains dashboard, metrics panel, and remote wrapper components.
- **Remotes** (`packages/remote-angular` :4201, `packages/remote-forms` :4202, `packages/remote-charts` :4203): Each exposes a `./Component` via `federation.config.js`. Loaded as Angular components by the host.
- **Auth library** (`packages/auth`): Shared auth service using Angular Signals for reactive state (`isAuthenticated`, `currentUser`) and RxJS Subjects for event streams (`authEvents$`). Singleton via `globalThis`.
- **Shared library** (`packages/shared`): Framework-agnostic utilities — `EventBus`, `SharedState` (BroadcastChannel-backed key/value store on `globalThis.__mfeSharedState`), and `MetricsCollector` (`globalThis.__mfeMetricsStore`).

### Cross-MFE communication patterns

1. **Angular Signals** (via `@mfe-playground/auth`): Singleton service shared across all MFEs through `shareAll({ singleton: true })`. Signals propagate instantly via Angular change detection.
2. **BroadcastChannel** (via `SharedState`): Key/value store on `globalThis.__mfeSharedState` for cross-remote state sharing (e.g., `counter:value`, `user:name`, `user:theme`).
3. **CustomEvent** (via `MetricsCollector`): `mfe:metric` events on `window` + persistent array on `globalThis.__mfeMetricsStore`.

### Federation configuration

Each Angular package has a `federation.config.js` using `@angular-architects/native-federation`. Remotes declare `exposes`, host reads remote URLs from `src/federation.manifest.json` (localhost in dev, GitHub Pages URLs in production — swapped during CI deploy).

## CI

GitHub Actions (`.github/workflows/ci.yml`): builds on Node 20 and 22, deploys to GitHub Pages on push to main. The deploy step overwrites `federation.manifest.json` with production URLs before building.
