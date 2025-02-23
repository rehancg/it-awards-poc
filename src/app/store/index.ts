import { ActionReducerMap } from '@ngrx/store';
import { authReducer } from './auth/auth.reducer';
import { routerReducer } from './router/router.reducer';
import { AuthState } from './auth/auth.state';
import { RouterState } from './router/router.state';

export interface AppState {
  auth: AuthState;
  router: RouterState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  router: routerReducer
};
