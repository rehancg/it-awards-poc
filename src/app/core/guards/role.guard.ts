import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserRole } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  userRole: UserRole = UserRole.ADMIN;

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const allowedRoles = route.data['roles'] as UserRole[];

    if (allowedRoles.includes(this.userRole)) {
      return true;
    }

    // Navigate to appropriate dashboard based on role
    this.router.navigate(['/home', this.userRole.toLowerCase()]);
    return false;
  }
}
