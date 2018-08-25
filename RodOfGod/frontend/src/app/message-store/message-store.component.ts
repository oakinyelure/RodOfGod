import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-store',
  templateUrl: './message-store.component.html',
  styleUrls: ['./message-store.component.css']
})
export class MessageStoreComponent implements OnInit {

  @Input()page:string = "shop";
  constructor() { }

  ngOnInit() {
  }

}
