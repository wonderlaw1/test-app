import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/shared/guards/auth.guard';

const ROUTES: Routes = [
  { path: 'workouts', canActivate: [AuthGuard], loadChildren: './workouts$/workouts$.module#WorkoutsModule' },
  { path: 'schedule', canActivate: [AuthGuard], loadChildren: './schedule/schedule.module#ScheduleModule' },
  { path: 'meals', canActivate: [AuthGuard], loadChildren: './meals/meals.module#MealsModule' },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class HealthRoutingModule { }
