import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {
  personAchivs = [
    { pic: './assets/achievement-icon.png', name: 'Exoft Turbo Power', xp: '15 xp' },
    { pic: './assets/achievement-icon.png', name: 'Exoft Turbo Power', xp: '15 xp' },
    { pic: './assets/achievement-icon.png', name: 'Exoft Skylark Power', xp: '20 xp' },
    { pic: './assets/achievement-icon.png', name: 'Exoft Corpo Power', xp: '20 xp' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
