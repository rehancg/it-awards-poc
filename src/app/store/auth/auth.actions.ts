import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth] Login Success',
  props<{ user: any }>()
);

export const logout = createAction('[Auth] Logout');
