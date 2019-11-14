import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './containers/register/register.component';

const ROUTES: Routes = [
  { path: '', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
