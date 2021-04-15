// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { Routes, RouterModule } from '@angular/router';
import { PipesModule } from '../shared/pipes/pipes.module';
import { ThankYouModule } from '../shared/components/thank-you/thank-you.module';
import { OtherUserProfileModule } from '../shared/modals/other-user-profile/other-user-profile.module';
import { RequestAchievementModule } from '../shared/modals/request-achievement/request-achievement.module';
import { SayThanksModule } from '../shared/modals/say-thanks/say-thanks.module';

// Components
import { DashboardComponent } from './dashboard.component';
import { BadgesComponent } from './components/badges/badges.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { ExoftAchievementsComponent } from './components/exoft-achievements/exoft-achievements.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { PersonalAchievementsComponent } from './components/personal-achievements/personal-achievements.component';
import { TopChartComponent } from './components/top-chart/top-chart.component';

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
    TopChartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    PipesModule,
    ThankYouModule,
    OtherUserProfileModule,
    RequestAchievementModule,
    SayThanksModule
  ]
})
export class DashboardModule { }
