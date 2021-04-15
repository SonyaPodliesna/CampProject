import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequestAchievementComponent } from '../../../shared/modals/request-achievement/request-achievement.component';

@Component({
  selector: 'app-personal-achievements',
  templateUrl: './personal-achievements.component.html',
  styleUrls: ['./personal-achievements.component.scss']
})
export class PersonalAchievementsComponent {
  personalAchievements = [
    { pic: './assets/achievement-icon.png', name: 'Exoft Turbo Power', xp: '15 xp' },
    { pic: './assets/achievement-icon.png', name: 'Exoft Turbo Power', xp: '15 xp' },
    { pic: './assets/achievement-icon.png', name: 'Exoft Skylark Power', xp: '20 xp' },
    { pic: './assets/achievement-icon.png', name: 'Exoft Corporate Power', xp: '20 xp' }
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
