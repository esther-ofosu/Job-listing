import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { updateFiltersReducers } from '../reducers.store';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  updateFiltersReducers,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
