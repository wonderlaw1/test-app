import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'schedule' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
