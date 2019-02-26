import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageStoreComponent } from './message-store.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [MessageStoreComponent],
  exports: [MessageStoreComponent]
})
export class MessageStoreModule { }
