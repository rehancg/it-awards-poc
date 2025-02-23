import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import * as RouterActions from '../../store/router/router.actions';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-team-awards',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  template: `
    <app-breadcrumb></app-breadcrumb>
    <div>Team Awards Works!</div>
  `
})
export class TeamAwardsComponent {
  constructor(private store: Store<AppState>) {
    this.store.dispatch(RouterActions.updateRoute({
      url: '/team-awards',
      breadcrumbs: [
        { label: 'Home', path: '/home' },
        { label: 'Team Awards', path: '/team-awards' }
      ]
    }));
  }
}
