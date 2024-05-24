import { Component } from '@angular/core';
import { jobDetails } from '../data.ts/data-details';
import { JobCardComponent } from "../job-card/job-card.component";

@Component({
    selector: 'app-job-list',
    standalone: true,
    templateUrl: './job-list.component.html',
    styleUrl: './job-list.component.scss',
    imports: [JobCardComponent]
})
export class JobListComponent {
  Data = jobDetails;
 constructor(){
  console.log(this.Data)
 }
}
