// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../material/material.module';

// Components
import { OtherUserProfileComponent } from './other-user-profile.component';


const routes: Routes = [
  {
    path: '',
    component: OtherUserProfileComponent,
  }
];

@NgModule({
  declarations: [OtherUserProfileComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  entryComponents: [OtherUserProfileComponent]
})
export class OtherUserProfileModule { }
