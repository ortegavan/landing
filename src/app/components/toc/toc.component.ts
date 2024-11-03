import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
    selector: 'app-toc',
    standalone: true,
    imports: [AccordionModule],
    templateUrl: './toc.component.html',
    styleUrl: './toc.component.css',
})
export class TocComponent {}
