import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { AboutBookComponent } from '../about-book/about-book.component';
import { WhoComponent } from '../who/who.component';
import { ContactComponent } from '../contact/contact.component';
import { TocComponent } from '../toc/toc.component';
import { PriceComponent } from '../price/price.component';
import { HeaderComponent } from '../header/header.component';
import { FeaturesComponent } from '../features/features.component';
import { NewsletterComponent } from '../newsletter/newsletter.component';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [
        HeroComponent,
        AboutBookComponent,
        WhoComponent,
        ContactComponent,
        TocComponent,
        PriceComponent,
        HeaderComponent,
        FeaturesComponent,
        NewsletterComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {
    constructor(private route: ActivatedRoute) {
        this.route.fragment.subscribe((fragment: string | null) => {
            if (fragment === 'newsletter') {
                setTimeout(() => {
                    document
                        .getElementById('newsletter')
                        ?.scrollIntoView({ behavior: 'smooth' });
                }, 1500);
            }
        });
    }
}
