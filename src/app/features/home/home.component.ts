import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { UserRole } from '../../core/models/user.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    AdminDashboardComponent,
    EmployeeDashboardComponent
  ],
  template: `
    <ng-container [ngSwitch]="userRole">
      <app-admin-dashboard *ngSwitchCase="UserRole.ADMIN"></app-admin-dashboard>
      <app-employee-dashboard *ngSwitchCase="UserRole.EMPLOYEE"></app-employee-dashboard>
    </ng-container>
  `
})
export class HomeComponent {
  // Temporarily hardcoded - should come from auth service
  userRole: UserRole = UserRole.ADMIN;
  UserRole = UserRole;
}
