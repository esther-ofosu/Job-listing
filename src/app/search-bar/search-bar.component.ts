import { Component } from '@angular/core';
import { SearchCardComponent } from "../search-card/search-card.component";
import { jobRequirement } from '../data.ts/job-requirement';

@Component({
    selector: 'app-search-bar',
    standalone: true,
    templateUrl: './search-bar.component.html',
    styleUrl: './search-bar.component.scss',
    imports: [SearchCardComponent]
})
export class SearchBarComponent {
  Items= jobRequirement;
}
