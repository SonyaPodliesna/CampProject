import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../material/material.module';

import { SayThanksComponent } from './say-thanks.component';

const routes: Routes = [
  {
    path: '',
    component: SayThanksComponent,
  }
];

@NgModule({
  declarations: [SayThanksComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  entryComponents: [SayThanksComponent]
})
export class SayThanksModule { }
