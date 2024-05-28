import { ComponentFixture, TestBed} from '@angular/core/testing';

import { JobCardComponent } from './job-card.component';
import { JobDetails } from '../shared/interfaces';
import { By } from '@angular/platform-browser';

describe('JobCardComponent', () => {
  let component: JobCardComponent;
  let fixture: ComponentFixture<JobCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobCardComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Input data tests
  it('should display job details when data is provided', () => {
    const mockJobDetails: JobDetails = {
      id: 1,
      icon: 'path/to/icon.png',
      companyName: 'Test Company',
      position: 'Software Engineer',
      timePosted: '1 day ago',
      employmentStatus: 'Full-Time',
      location: 'Remote',
      requirements: ['Java', 'React'],
    };
    component.data = mockJobDetails;
    fixture.detectChanges(); 

    const imageElement = fixture.debugElement.query(By.css('img'));
    expect(imageElement.attributes['src']).toEqual(mockJobDetails.icon);

    const companyNameElement = fixture.debugElement.query(By.css('#company-name'));
    expect(companyNameElement.nativeElement.textContent).toEqual(mockJobDetails.companyName);


    const requirementButtons = fixture.debugElement.queryAll(By.css('button'));
    expect(requirementButtons.length).toEqual(mockJobDetails.requirements.length);
    expect(requirementButtons[0].nativeElement.textContent).toEqual(mockJobDetails.requirements[0]);
  });

  it('should handle missing data in input (optional)', () => {
    component.data = {
      id: 1,
      icon: 'path/to/icon.png',
      companyName: 'Test Company',
      position: 'Software Engineer',
      timePosted: '1 day ago',
      employmentStatus: 'Full-Time',
      location: 'Remote',
      requirements: ['Java', 'React'],
    }; 
    fixture.detectChanges();

  });

  it('should emit filter on button click', () => {
    const mockJobDetails: JobDetails = {
      id: 1,
      icon: 'path/to/icon.png',
      companyName: 'Test Company',
      position: 'Software Engineer',
      timePosted: '1 day ago',
      employmentStatus: 'Full-Time',
      location: 'Remote',
      requirements: ['Java', 'React'],
    };
    const emittedRequirement = 'Java';
    component.data = mockJobDetails;
    component.filterEmitter.subscribe((requirement) => expect(requirement).toEqual(emittedRequirement));
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button')); // Assuming the first button
    button.triggerEventHandler('click', emittedRequirement);
  });
});
