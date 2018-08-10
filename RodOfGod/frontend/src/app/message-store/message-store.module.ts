import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageStoreComponent } from './message-store.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MessageStoreComponent],
  exports: [MessageStoreComponent]
})
export class MessageStoreModule { }
