import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideMarkdown } from 'ngx-markdown';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAuth } from '@triwebdev/auth-component';
import { provideCarousel } from '@triwebdev/carousel-component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAuth({
      apiUrl: 'localhost:300/dummyExample',
      loginRedirectionUrl: ''
    }),
    provideMarkdown(),
    provideCarousel({firstMoveDelayMultiplier: 1, msPerMove: 2000})
  ]
};
