import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
    selector: 'app-toc',
    imports: [AccordionModule],
    templateUrl: './toc.component.html',
    styleUrl: './toc.component.css',
})
export class TocComponent {}
