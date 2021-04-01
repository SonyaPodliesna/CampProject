import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DifferenceInTimePipe } from './difference-in-time.pipe'

@NgModule({
  declarations: [DifferenceInTimePipe],
  imports: [CommonModule],
  exports: [DifferenceInTimePipe]
})
export class PipesModule { }
