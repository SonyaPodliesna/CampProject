import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileSettingsComponent } from '../../../shared/modals/profile-settings/profile-settings.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user = { userPic: '../assets/user-pic.jpg', userFirstName: 'Sonya', userLastName: 'Podliesna' };

  constructor(private readonly matDialog: MatDialog) { }

  openProfileSettingsDialog(): void {
    this.matDialog.open(ProfileSettingsComponent, {
      width: '400px',
      panelClass: 'profile-settings-dialog',
      backdropClass: 'backdropBackground'
    });
  }
}
