import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';

@Component({
    selector: 'app-layout',
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatMenuModule,
        SidebarNavComponent
    ],
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isSidebarCollapsed = false;
  appTitle = 'IT Awards'; // Change this to your app name

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  openNotifications() {
    // Implement notifications logic here
    console.log('Notifications clicked');
  }

  openProfileMenu() {
    // Implement profile menu logic here
    console.log('Profile menu clicked');
  }
}
