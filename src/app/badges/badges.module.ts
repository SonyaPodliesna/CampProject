//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgesComponent } from './badges.component';
import { MaterialModule } from '../shared/material/material.module';
import { Routes, RouterModule } from '@angular/router';
import { ThankYouModule } from '../shared/components/thank-you/thank-you.module'
import { PipesModule } from '../shared/pipes/pipes.module'

//Components
import { LastAchievementsComponent } from './components/last-achievements/last-achievements.component';
import { TotalAchievementsComponent } from './components/total-achievements/total-achievements.component';
import { UserComponent } from './components/user/user.component';
import { FullListAchievementsComponent } from './components/full-list-achievements/full-list-achievements.component';

const routes: Routes = [
  {
    path: '',
    component: BadgesComponent
  }
];


@NgModule({
  declarations: [
    BadgesComponent, 
    LastAchievementsComponent, 
    TotalAchievementsComponent, 
    UserComponent, 
    FullListAchievementsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ThankYouModule,
    PipesModule
  ]
})
export class BadgesModule { }
