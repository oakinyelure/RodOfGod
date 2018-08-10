import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './main-components';

const routes: Routes = [
  { path: 'homepage', component: HomePageComponent }
];

@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
