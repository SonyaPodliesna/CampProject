import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequestAchievementComponent } from '../../../shared/modals/request-achievement/request-achievement.component';

@Component({
  selector: 'app-last-achievements',
  templateUrl: './last-achievements.component.html',
  styleUrls: ['./last-achievements.component.scss']
})
export class LastAchievementsComponent {
  personalAchievements = [
    { pic: './assets/achievement-icon.png', name: 'Exoft Turbo Power', xp: 15 },
    { pic: './assets/achievement-icon.png', name: 'Exoft Turbo Power', xp: 15 },
    { pic: './assets/achievement-icon.png', name: 'Exoft Skylark Power', xp: 20 },
    { pic: './assets/achievement-icon.png', name: 'Exoft Corpo Power', xp: 20 }
  ];

  constructor(private readonly matDialog: MatDialog) { }

  openRequestDialog(): void {
    this.matDialog.open(RequestAchievementComponent, {
      width: '600px',
      panelClass: 'request-achievement-dialog',
      backdropClass: 'backdropBackground'
    });
  }
}
