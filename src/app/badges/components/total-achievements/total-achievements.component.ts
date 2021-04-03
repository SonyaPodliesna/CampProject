import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-achievements',
  templateUrl: './total-achievements.component.html',
  styleUrls: ['./total-achievements.component.scss']
})
export class TotalAchievementsComponent implements OnInit {
  achievements = [
    { pic: './assets/achievement-icon.png', name: 'Exoft Turbo Power', xp: 15 },
    { pic: './assets/achievement-icon.png', name: 'Exoft Turbo Power', xp: 15 },
    { pic: './assets/achievement-icon.png', name: 'Exoft Skylark Power', xp: 20 },
    { pic: './assets/achievement-icon.png', name: 'Exoft Corpo Power', xp: 20 }
  ];

  totalXP: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.totalXP = this.getXP(this.achievements);
  }

  getXP(achievements) {
    let counter = 0;
    achievements.forEach(achievement => {
      counter = counter + achievement.xp
    });

    return counter;
  }
}
