import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { loadRemoteModule } from '@angular-architects/native-federation';

import { AppComponent } from './app/app.component';

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
  ],
}).catch((err) => console.error(err));
