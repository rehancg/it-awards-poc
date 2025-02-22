import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-top-performers',
    imports: [
        CommonModule,
        MatListModule,
        MatIconModule
    ],
    template: `
    <mat-list>
      <mat-list-item *ngFor="let performer of topPerformers">
        <img matListItemAvatar [src]="performer.avatar" [alt]="performer.name">
        <span matListItemTitle>{{performer.name}}</span>
        <span matListItemLine>{{performer.award}}</span>
      </mat-list-item>
    </mat-list>
  `
})
export class TopPerformersComponent {
  // Mock data - should come from a service
  topPerformers = [
    { name: 'John Doe', award: 'Excellence in Innovation', avatar: 'https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png' },
    { name: 'Jane Smith', award: 'Outstanding Leadership', avatar: 'https://static.vecteezy.com/system/resources/previews/027/951/137/non_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png' },
    { name: 'Mike Johnson', award: 'Team Player of the Month', avatar: 'https://static.vecteezy.com/system/resources/previews/028/238/588/non_2x/old-man-teacher-face-3d-profession-avatars-free-png.png' }
  ];
}
