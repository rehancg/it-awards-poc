import { createAction, props } from '@ngrx/store';
import { BreadcrumbItem } from './router.state';

export const updateRoute = createAction(
  '[Router] Update Route',
  props<{ url: string; breadcrumbs: BreadcrumbItem[] }>()
);
