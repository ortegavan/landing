import { AfterViewInit, Component, ElementRef, NgZone, ViewChild } from '@angular/core';

@Component({
    selector: 'app-newsletter',
    imports: [],
    templateUrl: './newsletter.component.html',
    styleUrl: './newsletter.component.css',
})
export class NewsletterComponent implements AfterViewInit {
    @ViewChild('kitFormWrapper') kitFormWrapper!: ElementRef;

    constructor(private zone: NgZone) {}

    ngAfterViewInit(): void {
        this.zone.runOutsideAngular(() => {
            const script = document.createElement('script');
            script.src = 'https://ortegavan.kit.com/d20c72486c/index.js';
            script.setAttribute('data-uid', 'd20c72486c');
            script.async = true;
            this.kitFormWrapper.nativeElement.appendChild(script);
        });
    }
}
