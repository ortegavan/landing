import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-pricing',
    standalone: true,
    imports: [ButtonModule],
    templateUrl: './pricing.component.html',
    styleUrl: './pricing.component.css',
})
export class PricingComponent {}
