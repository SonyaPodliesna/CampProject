import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OtherUserProfileComponent } from '../../modals/other-user-profile/other-user-profile.component';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent {
  user = { userPic: './assets/user-pic.jpg', firstName: 'Taras', lastName: 'Sava', userXP: 15 };

  constructor(private readonly matDialog: MatDialog) { }

  openOtherUserDialog(): void {
    this.matDialog.open(OtherUserProfileComponent, {
      width: '800px',
      panelClass: 'other-profile-dialog',
      backdropClass: 'backdropBackground',
      data: {
        userPic: this.user.userPic,
        userFirstName: this.user.firstName,
        userLastName: this.user.lastName,
        userXP: this.user.userXP,
      }
    });
  }
}
