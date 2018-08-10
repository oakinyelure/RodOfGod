import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiveComponent } from './give.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GiveComponent],
  exports: [GiveComponent]
})
export class GiveModule { }
