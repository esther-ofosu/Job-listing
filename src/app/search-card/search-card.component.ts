import { Component, Input, output } from '@angular/core';
import { JobDetails, JobRequirement } from '../shared/interfaces';

@Component({
  selector: 'app-search-card',
  standalone: true,
  imports: [],
  templateUrl: './search-card.component.html',
  styleUrl: './search-card.component.scss'
})
export class SearchCardComponent {
  @Input() filter!: string;
  removeFilterEmitter = output<string>();

  onRemoveFilter() {
    this.removeFilterEmitter.emit(this.filter)
  }

}
