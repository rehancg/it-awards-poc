import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './auth.state';
import { UserRole } from '../../core/models/user.model';

export const selectAuth = createFeatureSelector<AuthState>('auth');

export const selectUserRole = createSelector(
  selectAuth,
  (state: AuthState) => state.user?.role ?? UserRole.ADMIN
);
