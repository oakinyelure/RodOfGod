import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';

import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule
  ],
  declarations: [AboutComponent],
  exports: [AboutComponent],
  bootstrap: [AboutComponent]
})
export class AboutModule { }
