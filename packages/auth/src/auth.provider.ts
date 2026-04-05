import { InjectionToken, makeEnvironmentProviders } from '@angular/core';
import { AuthService } from './auth.service.js';

export const AUTH_SERVICE = new InjectionToken<AuthService>('AuthService');

export function provideAuth() {
  return makeEnvironmentProviders([
    { provide: AUTH_SERVICE, useFactory: () => AuthService.getInstance() },
  ]);
}
