import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

describe('AppComponent', () => {
  const mockFilters = ['filter1', 'filter2'];
  let store={
     select: () => {
      return of({
        filters: mockFilters
      })
    },
    dispatch: (action: ()=>void) => {
     return
    }
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers:[
        {
          provide:Store,
          useValue:store
        }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'job-project' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('job-project');
  });

});
