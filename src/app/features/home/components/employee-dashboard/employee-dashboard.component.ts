import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { TopPerformersComponent } from '../../../../shared/components/top-performers/top-performers.component';
import { QuickNominateComponent } from '../../../../shared/components/quick-nominate/quick-nominate.component';

@Component({
    selector: 'app-employee-dashboard',
    imports: [
        CommonModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        TopPerformersComponent,
        QuickNominateComponent
    ],
    templateUrl: './employee-dashboard.component.html',
    styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent {}
