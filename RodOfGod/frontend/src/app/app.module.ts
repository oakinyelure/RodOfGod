import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/homepage.component';
import { AppRoutingModule } from './/app-routing.module';
import { WatchOnlineComponent } from './watch-online/watch-online.component';
import { AboutComponent } from './about/about.component';
import { GiveComponent } from './give/give.component';
import { BlogComponent } from './blog/blog.component';
import { MessageStoreComponent } from './message-store/message-store.component';
import { MusicStoreComponent } from './music-store/music-store.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    WatchOnlineComponent,
    AboutComponent,
    GiveComponent,
    BlogComponent,
    MessageStoreComponent,
    MusicStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
