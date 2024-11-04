import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
    provideRouter,
    withHashLocation,
    withInMemoryScrolling,
} from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(
            routes,
            withHashLocation(),
            withInMemoryScrolling({
                anchorScrolling: 'enabled',
                scrollPositionRestoration: 'enabled',
            })
        ),
        provideAnimationsAsync(),
    ],
};
