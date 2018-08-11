import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomePageModule, MessageStoreModule, WatchOnlineModule, AboutModule, BlogModule, GiveModule, MusicStoreModule } from './nav-modules';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    MessageStoreModule,
    WatchOnlineModule,
    AboutModule,
    BlogModule,
    GiveModule,
    MusicStoreModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
