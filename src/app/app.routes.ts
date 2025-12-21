import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        loadComponent: () =>
            import('./components/home/home.component').then(
                (m) => m.HomeComponent,
            ),
    },
    {
        path: 'imagens',
        loadComponent: () =>
            import('./components/images/images.component').then(
                (m) => m.ImagesComponent,
            ),
    },
    {
        path: 'errata',
        loadComponent: () =>
            import('./components/errata/errata.component').then(
                (m) => m.ErrataComponent,
            ),
    },
    { path: '**', redirectTo: 'home' },
];
