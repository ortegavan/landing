import { Component } from '@angular/core';

@Component({
    selector: 'app-price',
    imports: [],
    templateUrl: './price.component.html',
    styleUrl: './price.component.css',
})
export class PriceComponent {
    comprarKindle() {
        window.open(
            'https://www.amazon.com.br/Livros/b/?ie=UTF8&node=6740748011&ref_=nav_cs_books',
            '_blank'
        );
    }

    comprarBrochura() {
        throw new Error('Not implemented yet');
    }

    comprarCapaDura() {
        window.open(
            'https://www.amazon.com.br/kindle-dbs/storefront?storeType=browse&node=5475882011&ref_=nav_cs_kindle_books',
            '_blank'
        );
    }
}
