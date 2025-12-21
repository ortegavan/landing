import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
    provideRouter,
    withHashLocation,
    withInMemoryScrolling,
} from '@angular/router';
import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeuix/themes/lara';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(
            routes,
            withHashLocation(),
            withInMemoryScrolling({
                anchorScrolling: 'enabled',
                scrollPositionRestoration: 'enabled',
            }),
        ),
        providePrimeNG({
            theme: {
                preset: Lara,
                options: {
                    darkModeSelector: '.dark-side',
                },
            },
        }),
    ],
};
