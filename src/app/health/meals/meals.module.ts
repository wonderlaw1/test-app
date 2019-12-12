import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { MealsComponent } from './containers/meals/meals.component';
import { MealComponent } from './containers/meal/meal.component';
import { MealsRoutingModule } from './meals.routing-module';
import { MealFormComponent } from './components/meal-form/meal-form.component';


@NgModule({
  declarations: [
    MealsComponent,
    MealComponent,
    MealFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MealsRoutingModule,
    SharedModule
  ]
})
export class MealsModule { }
