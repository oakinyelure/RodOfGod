import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  isFindDistanceClicked: boolean = false;
  userDistanceToChurch:number;
  errorMessage: string;

  ngOnInit() {
    
  }

  getUserDistanceToChurch() {
  }

}
