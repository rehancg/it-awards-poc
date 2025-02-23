import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import * as RouterActions from '../../store/router/router.actions';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-approvals',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  template: `
    <app-breadcrumb></app-breadcrumb>
    <div>Approvals Works!</div>
  `
})
export class ApprovalsComponent {
  constructor(private store: Store<AppState>) {
    this.store.dispatch(RouterActions.updateRoute({
      url: '/approvals',
      breadcrumbs: [
        { label: 'Home', path: '/home' },
        { label: 'Approvals', path: '/approvals' }
      ]
    }));
  }
}
