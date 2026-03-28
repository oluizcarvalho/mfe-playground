import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { loadRemoteModule } from '@angular-architects/native-federation';

import { AppComponent } from './app/app.component';

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
    loadComponent: () =>
      loadRemoteModule('remote-angular', './Component').then(
        (m) => m.WidgetComponent
      ),
  },
  {
    path: 'remote-react',
    loadComponent: () =>
      import('./app/components/remote-wrapper/remote-wrapper.component').then(
        (m) => m.RemoteWrapperComponent
      ),
    data: { remoteName: 'remote-react', exposedModule: './App' },
  },
  {
    path: 'remote-vue',
    loadComponent: () =>
      import('./app/components/remote-wrapper/remote-wrapper.component').then(
        (m) => m.RemoteWrapperComponent
      ),
    data: { remoteName: 'remote-vue', exposedModule: './App' },
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule),
  ],
}).catch((err) => console.error(err));
