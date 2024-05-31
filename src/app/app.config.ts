import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { cacheInterceptor } from './core/interceptor/cache.interceptor';
import { authInterceptor } from './core/interceptor/auth.interceptor'
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions({skipInitialTransition: true})
    ),
    provideHttpClient(
      withInterceptors([authInterceptor, cacheInterceptor])
    )
  ]
};
