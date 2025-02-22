import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-approvals-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatChipsModule,
    MatCardModule,
    MatPaginatorModule
  ],
  templateUrl: './approvals-table.component.html',
  styleUrls: ['./approvals-table.component.scss']
})
export class ApprovalsTableComponent implements OnInit {
  displayedColumns: string[] = ['nominee', 'award', 'status'];
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  // Mock data - should come from a service
  approvals = [
    { nominee: 'Alice Brown', award: 'Innovation Award', status: 'Pending' },
    { nominee: 'Bob Wilson', award: 'Team Spirit Award', status: 'Pending' },
    { nominee: 'Carol Smith', award: 'Leadership Award', status: 'Approved' },
    { nominee: 'David Jones', award: 'Excellence Award', status: 'Rejected' },
    { nominee: 'Eva Garcia', award: 'Innovation Award', status: 'Pending' },
    { nominee: 'Frank Miller', award: 'Team Spirit Award', status: 'Approved' },
    { nominee: 'Grace Lee', award: 'Leadership Award', status: 'Pending' },
    { nominee: 'Henry Wilson', award: 'Excellence Award', status: 'Approved' },
    { nominee: 'Iris Chen', award: 'Innovation Award', status: 'Rejected' },
    { nominee: 'Jack Taylor', award: 'Team Spirit Award', status: 'Pending' }
  ];

  ngOnInit() {
    this.pageSize = 5;
    this.pageIndex = 0;
  }

  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }
}
