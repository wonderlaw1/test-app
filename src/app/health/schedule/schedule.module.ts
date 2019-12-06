import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './containers/schedule/schedule.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScheduleRoutingModule } from './schedule.routing-module';


@NgModule({
  declarations: [ScheduleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ScheduleRoutingModule
  ]
})
export class ScheduleModule { }
