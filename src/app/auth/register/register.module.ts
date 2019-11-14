import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './containers/register/register.component';
import { RegisterRoutingModule } from './register.router-module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule
  ]
})
export class RegisterModule { }
