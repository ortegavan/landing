import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-who',
    imports: [],
    templateUrl: './who.component.html',
    styleUrl: './who.component.css',
})
export class WhoComponent {
    @Input() title!: string;
    @Input() image!: string;
    @Input() imageSize!: string;
}
