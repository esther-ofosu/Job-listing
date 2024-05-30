import { createAction, props } from '@ngrx/store';

export const addFilter = createAction(
  'add-filter',
  props<{ filter: string }>()
);

export const removeFilter = createAction(
  'remove-filter',
  props<{ filter: string }>()
);

export const clearFilters = createAction('clear-filters');
