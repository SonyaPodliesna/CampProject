import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SayThanksComponent } from '../say-thanks/say-thanks.component';

@Component({
  selector: 'app-other-user-profile',
  templateUrl: './other-user-profile.component.html',
  styleUrls: ['./other-user-profile.component.scss']
})
export class OtherUserProfileComponent implements OnInit {
  userAchievements = [
    { pic: './assets/achievement-icon.png', name: 'Exoft turbo power', xp: 15 },
    { pic: './assets/achievement-icon.png', name: 'Exoft owl power', xp: 15 },
    { pic: './assets/achievement-icon.png', name: 'Exoft mentor power', xp: 20 },
    { pic: './assets/achievement-icon.png', name: 'Exoft skylark power', xp: 20 },
    { pic: './assets/achievement-icon.png', name: 'Exoft party power', xp: 15 },
    { pic: './assets/achievement-icon.png', name: 'Exoft corporate power', xp: 25 },
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public data:
    { userPic: string, userFirstName: string, userLastName: string, userXP: number },
    public readonly matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openSayThanksDialog(): void {
    this.matDialog.open(SayThanksComponent, {
      width: '300px',
      panelClass: 'say-thanks-dialog',
    });
  }

}
