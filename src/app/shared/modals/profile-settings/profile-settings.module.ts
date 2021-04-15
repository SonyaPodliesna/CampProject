// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { ProfileSettingsComponent } from './profile-settings.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileSettingsComponent,
  }
];

@NgModule({
  declarations: [ProfileSettingsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [ProfileSettingsComponent]
})
export class ProfileSettingsModule { }
