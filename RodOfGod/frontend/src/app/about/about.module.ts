import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';

import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AboutLeadershipComponent } from './about-leadership/about-leadership.component';
import { AboutVisionComponent } from './about-vision/about-vision.component';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [AboutComponent, AboutLeadershipComponent, AboutVisionComponent],
  exports: [AboutComponent],
  bootstrap: [AboutComponent]
})
export class AboutModule { }
