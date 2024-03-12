import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { FeatureComponent } from '../feature/feature.component';
import { PricingComponent } from '../pricing/pricing.component';
import { CtaComponent } from '../cta/cta.component';
import { BannerComponent } from '../banner/banner.component';

@Component({
    selector: 'app-landing',
    standalone: true,
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.css',
    imports: [
        HeroComponent,
        FeatureComponent,
        PricingComponent,
        CtaComponent,
        BannerComponent,
    ],
})
export class LandingComponent {}
