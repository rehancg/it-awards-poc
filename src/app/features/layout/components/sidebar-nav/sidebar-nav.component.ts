import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { UserRole } from '../../../../core/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store';
import { selectUserRole } from '../../../../store/auth/auth.selectors';

@Component({
    selector: 'app-sidebar-nav',
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule
    ],
    templateUrl: './sidebar-nav.component.html',
    styleUrls: ['./sidebar-nav.component.scss']
})
export class SidebarNavComponent {
  @Input() isCollapsed = false;
  userRole$;

  constructor(private store: Store<AppState>) {
    this.userRole$ = this.store.select(selectUserRole);
  }

  getNavigationItems(userRole: UserRole | null) {
    const baseItems = [
      { path: '/', label: 'Home', icon: 'home' },
      { path: '/culture-champion', label: 'Culture Champion', icon: 'emoji_events' }
    ];
    if (!userRole) return baseItems;
    const roleSpecificItems = {
      [UserRole.ADMIN]: [
        { path: '/team-awards', label: 'Team Awards', icon: 'groups' },
        { path: '/approvals', label: 'Approvals', icon: 'check_circle' },
        { path: '/admin-config', label: 'Admin Configs', icon: 'settings' }
      ],
      [UserRole.MODERATOR]: [
        { path: '/team-awards', label: 'Team Awards', icon: 'groups' },
        { path: '/approvals', label: 'Approvals', icon: 'check_circle' }
      ],
      [UserRole.MANAGER]: [
        { path: '/team-awards', label: 'Team Awards', icon: 'groups' }
      ],
      [UserRole.EMPLOYEE]: []
    };

    return [...baseItems, ...roleSpecificItems[userRole]];
  }
}
