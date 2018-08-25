import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';

import {SharedModule} from '../shared/shared.module';
import {ButtonModule} from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { BlogLikeComponent } from './blog-like/blog-like.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ButtonModule,
    InputTextareaModule,
    FormsModule,
    ToastModule
  ],
  declarations: [BlogComponent, BlogLikeComponent],
  exports: [BlogComponent]
})
export class BlogModule { }
