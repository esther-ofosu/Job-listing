import { Component } from '@angular/core';
import { jobDetails } from '../data.ts/data-details';
import { SearchCardComponent } from "../search-card/search-card.component";

@Component({
    selector: 'app-search-bar',
    standalone: true,
    templateUrl: './search-bar.component.html',
    styleUrl: './search-bar.component.scss',
    imports: [SearchCardComponent]
})
export class SearchBarComponent {
  Data= jobDetails;
}
