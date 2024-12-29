import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch, withJsonpSupport } from '@angular/common/http';
import { configService } from './Core/services/configService';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withFetch(),
      withJsonpSupport()
    ),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAppInitializer(() => inject(configService).loadConfigs())
  ]
};
