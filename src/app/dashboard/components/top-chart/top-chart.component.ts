import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OtherUserProfileComponent } from '../../../shared/modals/other-user-profile/other-user-profile.component';

@Component({
  selector: 'app-top-chart',
  templateUrl: './top-chart.component.html',
  styleUrls: ['./top-chart.component.scss']
})
export class TopChartComponent implements OnInit {
  users = [
    { userPic: './assets/user-pic.jpg', firstName: 'Taras', lastName: 'Yarchak', xp: 120, color: '#4aa2e0', width: '' },
    { userPic: './assets/user-pic.jpg', firstName: 'Ostap', lastName: 'Roik', xp: 115, color: '#9148c2', width: '' },
    { userPic: './assets/user-pic.jpg', firstName: 'Tanya', lastName: 'Gogina', xp: 70, color: '#d99842', width: '' },
    { userPic: './assets/user-pic.jpg', firstName: 'Taras', lastName: 'Sava', xp: 15, color: '#78e9e7', width: '' },
    { userPic: './assets/user-pic.jpg', firstName: 'Maksym', lastName: 'Nykolaichuk', xp: 0, color: '#4aa2e0', width: '' }
  ];

  constructor(private readonly matDialog: MatDialog) { }

  ngOnInit(): void {
    const max = this.users[0].xp;
    this.users.forEach(user => {
      user.width = `${user.xp * 100 / max}%`;
    });
  }

  openOtherUserDialog(user: { userPic: string, firstName: string, lastName: string, xp: number }): void {
    this.matDialog.open(OtherUserProfileComponent, {
      width: '800px',
      panelClass: 'other-profile-dialog',
      data: {
        userPic: user.userPic,
        userFirstName: user.firstName,
        userLastName: user.lastName,
        userXP: user.xp,
      }
    });
  }
}
