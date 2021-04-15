import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { MainNavModule } from '../main-nav/main-nav.module';
import { ProfileSettingsModule } from '../shared/modals/profile-settings/profile-settings.module';
import { ChangePasswordModule } from '../shared/modals/change-password/change-password.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../+dashboard/dashboard.module').then(module => module.DashboardModule)
      },
      {
        path: 'badges',
        loadChildren: () => import('../+badges/badges.module').then(module => module.BadgesModule)
      },
    ]
  }
];

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    MainNavModule,
    ProfileSettingsModule,
    ChangePasswordModule
  ]
})
export class LayoutModule { }
