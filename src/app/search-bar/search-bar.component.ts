import { Component, inject, Input, OnInit, output } from '@angular/core';
import { SearchCardComponent } from '../search-card/search-card.component';
import { Store } from '@ngrx/store';
import { GlobalState } from '../store/state.store';
import { clearFilters, removeFilter } from '../store/actions.store';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  imports: [SearchCardComponent,NgClass],
})
export class SearchBarComponent implements OnInit {
  store = inject(Store);
  filters!: string[];

  ngOnInit(): void {
    this.store
      .select('updateFiltersReducers')
      .subscribe((state: GlobalState) => (this.filters = state.filters));
  }

  onRemove(filter: string) {
    this.store.dispatch(removeFilter({ filter }));
  }

  onClearFilters() {
    this.store.dispatch(clearFilters())
  }
}
