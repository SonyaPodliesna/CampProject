import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  @Output() closeSidebar = new EventEmitter<void>();

  userInfo = { userFirstName: 'Sonya', userLastName: 'Podliesna', userPic: './assets/user-pic.jpg' };

  achievements = [
    { pic: './assets/achievement-icon.png', name: 'Exoft Turbo Power', xp: 15 },
    { pic: './assets/achievement-icon.png', name: 'Exoft Turbo Power', xp: 15 },
    { pic: './assets/achievement-icon.png', name: 'Exoft Skylark Power', xp: 20 },
    { pic: './assets/achievement-icon.png', name: 'Exoft Corpo Power', xp: 20 }
  ];

  totalXP = 0;

  ngOnInit(): void {
    this.totalXP = this.getXP(this.achievements);
  }

  getXP(achievements: { pic: string, name: string, xp: number }[]): number {
    let counter = 0;
    achievements.forEach(achievement => {
      counter = counter + achievement.xp;
    });

    return counter;
  }

  hideSidebar(): void {
    this.closeSidebar.emit();
  }
}
