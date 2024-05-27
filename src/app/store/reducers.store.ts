import { createReducer, on } from '@ngrx/store';
import { globalState } from './state.store';
import { addFilter, clearFilters, removeFilter } from './actions.store';

export const updateFiltersReducers = createReducer(
  globalState,
  on(addFilter, (state, action) => {
    const updatedFilters = [...state.filters];
    const found = state.filters.includes(action.filter);
    if (!found) updatedFilters.push(action.filter);
    return {
      ...state,
      filters: updatedFilters,
    };
  }),
  on(removeFilter, (state, action) => {
    const filtered = state.filters.filter((f) => f !== action.filter);
    return {
      ...state,
      filters: filtered,
    };
  }),
  on(clearFilters, (state) => {
    return {
        ...state,
        filters: []
    }
  })
);
