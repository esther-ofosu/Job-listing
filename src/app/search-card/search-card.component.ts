import { Component, Input } from '@angular/core';
import { JobDetails, JobRequirement } from '../shared/interfaces';

@Component({
  selector: 'app-search-card',
  standalone: true,
  imports: [],
  templateUrl: './search-card.component.html',
  styleUrl: './search-card.component.scss'
})
export class SearchCardComponent {
  @Input() item!: JobRequirement;

}
