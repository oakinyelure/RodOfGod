import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { HomePageComponent, WatchOnlineComponent, AboutComponent, BlogComponent, GiveComponent, MessageStoreComponent, MusicStoreComponent } from './nav-components';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'livesermon', component: WatchOnlineComponent},
  { path: 'about', component: AboutComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'give', component: GiveComponent},
  { path: 'messagestore', component: MessageStoreComponent},
  { path: 'musicstore', component: MusicStoreComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
