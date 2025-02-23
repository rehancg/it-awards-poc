import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { UserRole } from '../../core/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import * as AuthActions from '../../store/auth/auth.actions';
import * as RouterActions from '../../store/router/router.actions';
import { selectUserRole } from '../../store/auth/auth.selectors';

@Component({
    selector: 'app-home',
    imports: [
        CommonModule,
        AdminDashboardComponent,
        EmployeeDashboardComponent
    ],
    template: `
    <ng-container [ngSwitch]="userRole$ | async">
      <app-admin-dashboard *ngSwitchCase="UserRole.ADMIN"></app-admin-dashboard>
      <app-employee-dashboard *ngSwitchCase="UserRole.EMPLOYEE"></app-employee-dashboard>
    </ng-container>
  `
})
export class HomeComponent {
  UserRole = UserRole;
  userRole$;

  constructor(private store: Store<AppState>) {
    this.userRole$ = this.store.select(selectUserRole);
    this.store.dispatch(RouterActions.updateRoute({
      url: '/home',
      breadcrumbs: [
        { label: 'Home', path: '/home' }
      ]
    }));
  }
}
