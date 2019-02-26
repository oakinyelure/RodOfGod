import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicStoreComponent } from './music-store.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MusicStoreComponent],
  exports: [MusicStoreComponent]
})
export class MusicStoreModule { }
