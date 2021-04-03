import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-list-achievements',
  templateUrl: './full-list-achievements.component.html',
  styleUrls: ['./full-list-achievements.component.scss']
})
export class FullListAchievementsComponent implements OnInit {
  achievements = [
    { pic: './assets/achievement-icon.png', name: 'Exoft Turbo Power', xp: 15, dateEvent: new Date(2021, 2, 31, 12, 0, 0) },
    { pic: './assets/achievement-icon.png', name: 'Exoft Turbo Power', xp: 15, dateEvent: new Date(2021, 2, 31, 12, 0, 0) },
    { pic: './assets/achievement-icon.png', name: 'Exoft Skylark Power', xp: 20, dateEvent: new Date(2021, 2, 31, 12, 0, 0) },
    { pic: './assets/achievement-icon.png', name: 'Exoft Corporate Power', xp: 20, dateEvent: new Date(2021, 2, 31, 12, 0, 0) },
    { pic: './assets/achievement-icon.png', name: 'Exoft Corporate Power', xp: 20, dateEvent: new Date(2021, 2, 31, 12, 0, 0) }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
