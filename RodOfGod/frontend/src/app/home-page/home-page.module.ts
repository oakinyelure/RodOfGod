import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { HomePageComponent } from './homepage.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
  ],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
  bootstrap:[HomePageComponent]
})
export class HomePageModule { }
