import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-achievements',
  templateUrl: './personal-achievements.component.html',
  styleUrls: ['./personal-achievements.component.scss']
})
export class PersonalAchievementsComponent implements OnInit {
  personalAchievements = [
    { pic: './assets/achievement-icon.png', name: 'Exoft Turbo Power', xp: '15 xp' },
    { pic: './assets/achievement-icon.png', name: 'Exoft Turbo Power', xp: '15 xp' },
    { pic: './assets/achievement-icon.png', name: 'Exoft Skylark Power', xp: '20 xp' },
    { pic: './assets/achievement-icon.png', name: 'Exoft Corporate Power', xp: '20 xp' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
