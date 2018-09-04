import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { BottomFooterComponent } from './bottom-footer/bottom-footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TopNavComponent,
    BottomFooterComponent
    ],
  exports: [TopNavComponent, BottomFooterComponent]
})
export class SharedModule { }
