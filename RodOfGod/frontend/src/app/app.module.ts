import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HomePageModule, MessageStoreModule, WatchOnlineModule, AboutModule, BlogModule, GiveModule, MusicStoreModule } from './nav-modules';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptor } from './core/interceptors/http/http-error.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    MessageStoreModule,
    WatchOnlineModule,
    AboutModule,
    BlogModule,
    GiveModule,
    MusicStoreModule,
    BrowserAnimationsModule
  ],

  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
