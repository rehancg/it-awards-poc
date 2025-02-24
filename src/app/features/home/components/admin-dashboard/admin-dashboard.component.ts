import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { TopPerformersComponent } from '../../../../shared/components/top-performers/top-performers.component';
import { ApprovalsTableComponent } from '../../../../shared/components/approvals-table/approvals-table.component';
import { MatButtonModule } from '@angular/material/button';
@Component({
    selector: 'app-admin-dashboard',
    imports: [
        CommonModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatButtonModule,
        TopPerformersComponent,
        ApprovalsTableComponent
    ],
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {}
