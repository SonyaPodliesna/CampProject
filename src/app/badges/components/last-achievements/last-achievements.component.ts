import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-achievements',
  templateUrl: './last-achievements.component.html',
  styleUrls: ['./last-achievements.component.scss']
})
export class LastAchievementsComponent implements OnInit {
  personalAchievements = [
    { pic: './assets/achievement-icon.png', name: 'Exoft Turbo Power', xp: 15 },
    { pic: './assets/achievement-icon.png', name: 'Exoft Turbo Power', xp: 15 },
    { pic: './assets/achievement-icon.png', name: 'Exoft Skylark Power', xp: 20 },
    { pic: './assets/achievement-icon.png', name: 'Exoft Corpo Power', xp: 20 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
