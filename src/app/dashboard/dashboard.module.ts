// Modules
import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material/material.module';
import { Routes, RouterModule } from '@angular/router';
import { PipesModule } from '../pipes.module'


// Components
import { DashboardComponent } from './dashboard.component';
import { BadgesComponent } from './components/badges/badges.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { ExoftAchievementsComponent } from './components/exoft-achievements/exoft-achievements.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { PersonalAchievementsComponent } from './components/personal-achievements/personal-achievements.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { TopChartComponent } from './components/top-chart/top-chart.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];


@NgModule({
  declarations: [
    DashboardComponent,
    BadgesComponent,
    ChallengesComponent,
    ExoftAchievementsComponent,
    GreetingComponent,
    PersonalAchievementsComponent,
    ThankYouComponent,
    TopChartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    PipesModule
  ]
})
export class DashboardModule { }
