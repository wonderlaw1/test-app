import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent } from './containers/schedule/schedule.component';

const ROUTES: Routes = [
  { path: '', component: ScheduleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
