import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { provideAuth } from '@mfe-playground/auth';

import { AppComponent } from './app/app.component';

// --- Global MFE infrastructure initialization ---

// Persistent metrics store: survives navigation between routes
const METRICS_STORE_KEY = '__mfeMetricsStore';
if (!(globalThis as any)[METRICS_STORE_KEY]) {
  (globalThis as any)[METRICS_STORE_KEY] = [];
}

// SharedState singleton: BroadcastChannel-backed key/value store
const SHARED_STATE_KEY = '__mfeSharedState';
if (!(globalThis as any)[SHARED_STATE_KEY]) {
  const store = new Map<string, unknown>();
  const listeners = new Map<string, Set<(value: unknown, key: string) => void>>();
  const channel = new BroadcastChannel('mfe-playground-state');

  function notify(key: string, value: unknown): void {
    listeners.get(key)?.forEach((cb) => cb(value, key));
  }

  channel.onmessage = (event: MessageEvent) => {
    const { key, value } = event.data;
    store.set(key, value);
    notify(key, value);
  };

  (globalThis as any)[SHARED_STATE_KEY] = {
    get<T = unknown>(key: string): T | undefined {
      return store.get(key) as T | undefined;
    },
    set<T = unknown>(key: string, value: T): void {
      store.set(key, value);
      channel.postMessage({ key, value });
      notify(key, value);
    },
    subscribe<T = unknown>(key: string, callback: (value: T, key: string) => void): () => void {
      if (!listeners.has(key)) {
        listeners.set(key, new Set());
      }
      const cbs = listeners.get(key)!;
      cbs.add(callback as (value: unknown, key: string) => void);
      return () => cbs.delete(callback as (value: unknown, key: string) => void);
    },
  };
}

// --- End global MFE infrastructure ---

function loadRemote(remoteName: string, exposedModule: string, componentName: string) {
  return () =>
    loadRemoteModule(remoteName, exposedModule).then(
      (m) => m[componentName]
    ).catch((err) => {
      console.error(`Failed to load ${remoteName}:`, err);
      return import('./app/components/remote-error/remote-error.component').then(
        (m) => m.RemoteErrorComponent
      );
    });
}

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./app/components/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'remote-angular',
    loadComponent: loadRemote('remote-angular', './Component', 'WidgetComponent'),
  },
  {
    path: 'remote-forms',
    loadComponent: loadRemote('remote-forms', './Component', 'WidgetComponent'),
  },
  {
    path: 'remote-charts',
    loadComponent: loadRemote('remote-charts', './Component', 'WidgetComponent'),
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule),
    provideAuth(),
  ],
}).catch((err) => console.error(err));
