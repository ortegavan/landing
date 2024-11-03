import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { AboutBookComponent } from '../about-book/about-book.component';
import { WhoComponent } from '../who/who.component';
import { ContactComponent } from '../contact/contact.component';
import { TocComponent } from '../toc/toc.component';
import { PriceComponent } from '../price/price.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        HeroComponent,
        AboutBookComponent,
        WhoComponent,
        ContactComponent,
        TocComponent,
        PriceComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {}
