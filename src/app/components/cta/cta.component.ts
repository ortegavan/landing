import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-cta',
    standalone: true,
    imports: [ButtonModule],
    templateUrl: './cta.component.html',
    styleUrl: './cta.component.css',
})
export class CtaComponent {}
