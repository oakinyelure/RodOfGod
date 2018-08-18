import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { MatButtonModule } from '@angular/material/button';
import { HomePageComponent } from './homepage.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    FontAwesomeModule
  ],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
  bootstrap:[HomePageComponent]
})
export class HomePageModule { }
