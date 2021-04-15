import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { MainNavComponent } from './main-nav.component';
import { ProfileSettingsModule } from '../shared/modals/profile-settings/profile-settings.module';
import { ChangePasswordModule } from '../shared/modals/change-password/change-password.module';

const routes: Routes = [
  {
    path: '',
    component: MainNavComponent,
  }
];


@NgModule({
  declarations: [
    MainNavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ProfileSettingsModule,
    ChangePasswordModule
  ],
  exports: [MainNavComponent]
})
export class MainNavModule { }
