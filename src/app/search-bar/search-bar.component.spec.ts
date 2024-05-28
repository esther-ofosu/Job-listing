import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBarComponent } from './search-bar.component';
import { select, Store } from '@ngrx/store';
import { GlobalState } from '../store/state.store';
import { clearFilters, removeFilter } from '../store/actions.store';
import { BehaviorSubject, of } from 'rxjs';
import { NgClass } from '@angular/common';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let dispatchSpy: jasmine.SpyObj<Store<GlobalState>>;
  let selectSpy: jasmine.SpyObj<Store<GlobalState>>;
  const mockFilters = ['filter1', 'filter2'];
  const store = {
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
      imports: [NgClass],
      providers: [
        { provide: Store,
          useValue:store },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get filters after initialization', () => {

    expect(component.filters).toEqual(mockFilters);
  });

  it('should dispatch removeFilter action on onRemove', () => {
    const mockFilters = 'filter1';
    spyOn(store, 'dispatch');

    component.onRemove(mockFilters);
    expect(store.dispatch).toHaveBeenCalledWith(
      removeFilter({ filter: mockFilters })
    );
  });

  it('should dispatch clearFilters action on onClearFilters', () => {
    spyOn(store, 'dispatch');
    component.onClearFilters();
    expect(store.dispatch).toHaveBeenCalledWith(clearFilters());
  });
});
