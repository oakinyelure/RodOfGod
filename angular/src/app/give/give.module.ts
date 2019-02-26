import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiveComponent } from './give.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [GiveComponent],
  exports: [GiveComponent]
})
export class GiveModule { }
