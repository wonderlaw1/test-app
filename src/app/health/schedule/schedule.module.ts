import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './containers/schedule/schedule.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScheduleRoutingModule } from './schedule.routing-module';
import { ScheduleCalendarComponent } from './components/schedule-calendar/schedule-calendar.component';
import { ScheduleDaysComponent } from './components/schedule-days/schedule-days.component';
import { ScheduleControlsComponent } from './components/schedule-controls/schedule-controls.component';


@NgModule({
  declarations: [ScheduleComponent, ScheduleCalendarComponent, ScheduleDaysComponent, ScheduleControlsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ScheduleRoutingModule
  ]
})
export class ScheduleModule { }
