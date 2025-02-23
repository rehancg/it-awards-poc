import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import * as RouterActions from '../../store/router/router.actions';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-culture-champion',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  template: `<app-breadcrumb></app-breadcrumb><div>Culture Champion Works!</div>`
})
export class CultureChampionComponent {

  constructor(private store: Store<AppState>) {
    this.store.dispatch(RouterActions.updateRoute({
      url: '/culture-champion',
      breadcrumbs: [
        { label: 'Home', path: '/home' },
        { label: 'Culture Champion', path: '/culture-champion' }
      ]
    }));
  }

}
