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
  userAddress = {
    id: 6,
    name: "fgf"
  }

  ngOnInit() {
    this.userAddress.name = "fhvhg";
  }

  getDistanceToChurch(event) {
    event.preventDefault();
    console.log(event);
  }

}
