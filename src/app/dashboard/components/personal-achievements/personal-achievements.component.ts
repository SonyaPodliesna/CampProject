import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-achievements',
  templateUrl: './personal-achievements.component.html',
  styleUrls: ['./personal-achievements.component.scss']
})
export class PersonalAchievementsComponent{
  personalAchievements = [
    { pic: './assets/achievement-icon.png', name: 'Exoft Turbo Power', xp: '15 xp' },
    { pic: './assets/achievement-icon.png', name: 'Exoft Turbo Power', xp: '15 xp' },
    { pic: './assets/achievement-icon.png', name: 'Exoft Skylark Power', xp: '20 xp' },
    { pic: './assets/achievement-icon.png', name: 'Exoft Corpo Power', xp: '20 xp' }
  ];
}
