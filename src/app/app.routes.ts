import { Routes } from '@angular/router';
import { RoleGuard } from './core/guards/role.guard';
import { UserRole } from './core/models/user.model';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/layout/layout.component')
      .then(m => m.LayoutComponent),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./features/home/home.component')
          .then(m => m.HomeComponent)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module')
      .then(m => m.AuthModule)
  },
  { path: '**', redirectTo: '' }
];
