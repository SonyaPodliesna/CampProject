// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { RequestAchievementComponent } from './request-achievement.component';

const routes: Routes = [
  {
    path: '',
    component: RequestAchievementComponent,
  }
];

@NgModule({
  declarations: [RequestAchievementComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [RequestAchievementComponent]
})
export class RequestAchievementModule { }
