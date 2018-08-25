import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchOnlineComponent } from './watch-online.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [WatchOnlineComponent],
  exports: [WatchOnlineComponent]
})
export class WatchOnlineModule { }
