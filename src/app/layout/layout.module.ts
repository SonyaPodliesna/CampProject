import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../layout/layout.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { MainNavModule } from '../main-nav/main-nav.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{
      path: 'dashboard',
      loadChildren: () => import('../dashboard/dashboard.module').then(module => module.DashboardModule)
    }]
  }
];

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    MainNavModule
  ]
})
export class LayoutModule { }
