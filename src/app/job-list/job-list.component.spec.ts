import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListComponent } from './job-list.component';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';

describe('JobListComponent', () => {
  let component: JobListComponent;
  let fixture: ComponentFixture<JobListComponent>;
  const mockFilters = ['filter1', 'filter2'];
  let store={
    select:()=>{
      return of({
        filters: mockFilters
      })
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobListComponent],
      providers:[{
        provide: Store,
        useValue:store
      }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
