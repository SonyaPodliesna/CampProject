import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { MainNavComponent } from './main-nav.component';


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
    MaterialModule
  ],
  exports: [MainNavComponent]
})
export class MainNavModule { }
