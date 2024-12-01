import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'imagens',
        loadComponent: () =>
            import('./components/images/images.component').then(
                (m) => m.ImagesComponent
            ),
    },
    { path: '**', redirectTo: 'home' },
];
