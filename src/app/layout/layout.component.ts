import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileSettingsComponent } from '../shared/modals/profile-settings/profile-settings.component';
import { ChangePasswordComponent } from '../shared/modals/change-password/change-password.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  user = { userPic: './assets/user-pic.jpg', firstName: 'Sonya', lastName: 'Podliesna' };

  constructor(private readonly matDialog: MatDialog) { }

  openProfileSettingsDialog(): void {
    this.matDialog.open(ProfileSettingsComponent, {
      width: '400px',
      panelClass: 'profile-settings-dialog',
      backdropClass: 'backdropBackground'
    });
  }

  openChangePasswordDialog(): void {
    this.matDialog.open(ChangePasswordComponent, {
      width: '400px',
      panelClass: 'change-password-dialog',
      backdropClass: 'backdropBackground'
    });
  }
}
