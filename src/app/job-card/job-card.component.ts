import {
  Component,
  Input,
  OnInit,
  output,
} from '@angular/core';
import { JobDetails } from '../shared/interfaces';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss',
})
export class JobCardComponent implements OnInit {
  @Input() data!: JobDetails;
  filterEmitter = output<string>();

  ngOnInit(): void {
    // console.log(`data`, this.data);
  }

  onAddFilter(requirement: string) {
    this.filterEmitter.emit(requirement);
  }
}
