import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { ThankYouComponent } from './thank-you.component';


@NgModule({
  declarations: [ThankYouComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ThankYouComponent]
})
export class ThankYouModule { }
