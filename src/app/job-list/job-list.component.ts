import { Component, inject, OnInit } from '@angular/core';
import { jobDetails, jobLocation } from '../data.ts/data-details';
import { JobCardComponent } from '../job-card/job-card.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { JobDetails } from '../shared/interfaces';
import { Store } from '@ngrx/store';
import { GlobalState } from '../store/state.store';
import { state } from '@angular/animations';
import { addFilter } from '../store/actions.store';

@Component({
  selector: 'app-job-list',
  standalone: true,
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss',
  imports: [JobCardComponent, SearchBarComponent],
})
export class JobListComponent implements OnInit {
  store = inject(Store);

  Data = jobDetails;
  filters: string[] = [];

  ngOnInit(): void {
    this.store.select('updateFiltersReducers')
      .subscribe((state: GlobalState) => {
        this.Data = jobDetails;
        this.filters = state.filters;
        this.filterJobs();
      });
  }

  onAddFilter(filter: string) {
    this.store.dispatch(addFilter({ filter }));
  }

  filterJobs() {
    console.log('filter');
    this.Data = this.Data.filter((data: JobDetails) => {
      const requirements = data.requirements;
      return this.filters.every((filter) =>
        requirements.some((req) => req.includes(filter))
      );
    });
  }
}
