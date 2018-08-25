import { Component, OnInit } from '@angular/core';
import { UserProfile } from './homepage-models/user-profile.model';
import { RouteHelper } from '../core/helpers/route.helper';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: RouteHelper) { }

  isFindDistanceClicked: boolean = false;
  userDistanceToChurch:number;
  errorMessage: string;
  submitted: boolean;

  userProfile = new UserProfile;

  ngOnInit() {
    
  }

  getMembersAround(event) {
    event.preventDefault();
    this.submitted = true;
    if(this.userProfile.address) {
      this.errorMessage = "Sorry! there is no member near you";
    }
  }

  /**
   * Not the best solution but the defualt location does not work for what I wanted it for
   * @param route
   */
  navigate(route: string): void {
    this.router.navigate(route);
  }

}
