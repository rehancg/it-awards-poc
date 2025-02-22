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
        path: 'culture-champion',
        loadComponent: () => import('./features/culture-champion/culture-champion.component')
          .then(m => m.CultureChampionComponent)
      },
      {
        path: 'team-awards',
        loadComponent: () => import('./features/team-awards/team-awards.component')
          .then(m => m.TeamAwardsComponent)
      },
      {
        path: 'approvals',
        loadComponent: () => import('./features/approvals/approvals.component')
          .then(m => m.ApprovalsComponent)
      },
      {
        path: 'admin-config',
        loadComponent: () => import('./features/admin/admin-config.component')
          .then(m => m.AdminConfigComponent)
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
