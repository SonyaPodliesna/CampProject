import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OtherUserProfileComponent } from '../../../shared/modals/other-user-profile/other-user-profile.component';

@Component({
  selector: 'app-exoft-achievements',
  templateUrl: './exoft-achievements.component.html',
  styleUrls: ['./exoft-achievements.component.scss']
})
export class ExoftAchievementsComponent {
  exoftAchievements = [
    { userFirstName: 'Tanya', userLastName: 'Gogina', userAvatar: './assets/user-pic.jpg', dateEvent: new Date(2021, 2, 31, 12, 0, 0), eventText: 'Got achievement Exoft Turbo Power', eventType: 'Records', xp: 15 },
    { userFirstName: 'Tanya', userLastName: 'Gogina', userAvatar: './assets/user-pic.jpg', dateEvent: new Date(2021, 2, 29, 12, 0, 0), eventText: 'Got achievement Exoft Turbo Power', eventType: 'Records', xp: 15 },
    { userFirstName: 'Tanya', userLastName: 'Gogina', userAvatar: './assets/user-pic.jpg', dateEvent: new Date(2021, 3, 29, 12, 0, 0), eventText: 'Got achievement Exoft Turbo Power', eventType: 'Records', xp: 15 },
    { userFirstName: 'Tanya', userLastName: 'Gogina', userAvatar: './assets/user-pic.jpg', dateEvent: new Date(2021, 3, 29, 12, 0, 0), eventText: 'Got achievement Exoft Turbo Power', eventType: 'Records', xp: 15 },
    { userFirstName: 'Tanya', userLastName: 'Gogina', userAvatar: './assets/user-pic.jpg', dateEvent: new Date(2021, 3, 29, 12, 0, 0), eventText: 'Got achievement Exoft Turbo Power', eventType: 'Records', xp: 15 },
    { userFirstName: 'Tanya', userLastName: 'Gogina', userAvatar: './assets/user-pic.jpg', dateEvent: new Date(2021, 3, 29, 12, 0, 0), eventText: 'Got achievement Exoft Turbo Power', eventType: 'Records', xp: 15 },
    { userFirstName: 'Tanya', userLastName: 'Gogina', userAvatar: './assets/user-pic.jpg', dateEvent: new Date(2021, 3, 29, 12, 0, 0), eventText: 'Got achievement Exoft Turbo Power', eventType: 'Records', xp: 15 },
    { userFirstName: 'Tanya', userLastName: 'Gogina', userAvatar: './assets/user-pic.jpg', dateEvent: new Date(2021, 3, 29, 12, 0, 0), eventText: 'Got achievement Exoft Turbo Power', eventType: 'Records', xp: 15 },
    { userFirstName: 'Tanya', userLastName: 'Gogina', userAvatar: './assets/user-pic.jpg', dateEvent: new Date(2021, 3, 29, 12, 0, 0), eventText: 'Got achievement Exoft Turbo Power', eventType: 'Records', xp: 15 },
    { userFirstName: 'Tanya', userLastName: 'Gogina', userAvatar: './assets/user-pic.jpg', dateEvent: new Date(2021, 3, 29, 12, 0, 0), eventText: 'Got achievement Exoft Turbo Power', eventType: 'Records', xp: 15 },
    { userFirstName: 'Tanya', userLastName: 'Gogina', userAvatar: './assets/user-pic.jpg', dateEvent: new Date(2021, 3, 29, 12, 0, 0), eventText: 'Got achievement Exoft Turbo Power', eventType: 'Records', xp: 15 },
    { userFirstName: 'Tanya', userLastName: 'Gogina', userAvatar: './assets/user-pic.jpg', dateEvent: new Date(2021, 3, 29, 12, 0, 0), eventText: 'Got achievement Exoft Turbo Power', eventType: 'Records', xp: 15 },
    { userFirstName: 'Tanya', userLastName: 'Gogina', userAvatar: './assets/user-pic.jpg', dateEvent: new Date(2021, 3, 29, 12, 0, 0), eventText: 'Got achievement Exoft Turbo Power', eventType: 'Records', xp: 15 },
  ];
  constructor(private readonly matDialog: MatDialog) { }

  openOtherUserDialog(exoftAchievement: { userAvatar: string, userFirstName: string, userLastName: string, xp: number }): void {
    this.matDialog.open(OtherUserProfileComponent, {
      width: '800px',
      panelClass: 'other-profile-dialog',
      backdropClass: 'backdropBackground',
      data: {
        userPic: exoftAchievement.userAvatar,
        userFirstName: exoftAchievement.userFirstName,
        userLastName: exoftAchievement.userLastName,
        userXP: exoftAchievement.xp,
      }
    });
  }
}
