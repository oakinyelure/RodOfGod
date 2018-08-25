import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-give',
  templateUrl: './give.component.html',
  styleUrls: ['./give.component.css']
})
export class GiveComponent implements OnInit {

    @Input()page: string = "give";
  constructor() { }

  ngOnInit() {
  }

}
