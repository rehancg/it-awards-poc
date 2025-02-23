import { createReducer, on } from '@ngrx/store';
import { RouterState, initialRouterState } from './router.state';
import * as RouterActions from './router.actions';

export const routerReducer = createReducer(
  initialRouterState,
  on(RouterActions.updateRoute, (state, { url, breadcrumbs }) => ({
    ...state,
    url,
    breadcrumbs
  }))
);
