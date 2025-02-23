import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  template: `
    <nav class="breadcrumb">
      <ol>
        <li *ngFor="let crumb of (router$ | async)?.breadcrumbs; let last = last">
          <a [routerLink]="crumb.path" [class.active]="last" class="crumb-link">
            {{ crumb.label }}
          </a>
          <mat-icon *ngIf="!last" class="separator">chevron_right</mat-icon>
        </li>
      </ol>
    </nav>
  `,
  styles: [`
    .breadcrumb {
      padding: 8px 16px;
    }
    ol {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
    }
    li {
      display: flex;
      align-items: center;
    }
    .crumb-link {
      color: var(--primary-color);
      text-decoration: none;
      font-size: 14px;
      &:hover {
        text-decoration: underline;
      }
      &.active {
        color: var(--mdc-outlined-button-disabled-label-text-color);
        pointer-events: none;
      }
    }
    .separator {
      margin: 0 4px;
      font-size: 18px;
      height: 18px;
      width: 18px;
      color: var(--mdc-outlined-button-disabled-label-text-color);
    }
  `]
})
export class BreadcrumbComponent {
  router$;

  constructor(private store: Store<AppState>) {
    this.router$ = this.store.select(state => state.router);
  }
}
