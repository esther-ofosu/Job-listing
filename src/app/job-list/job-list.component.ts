import { Component } from '@angular/core';
import { jobDetails, jobLocation } from '../data.ts/data-details';
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
  let Data= jobLocation;
  console.log(this.Data)
 }
}
