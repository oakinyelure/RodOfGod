import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-watch-online',
  templateUrl: './watch-online.component.html',
  styleUrls: ['./watch-online.component.css']
})
export class WatchOnlineComponent implements OnInit {
  @Input()page: string = "livesermon";
  constructor() { }

  ngOnInit() {
  }

}
