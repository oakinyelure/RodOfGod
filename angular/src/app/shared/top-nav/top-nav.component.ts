import { Component, OnInit, Input } from '@angular/core';
import { RouteHelper } from '../../core/helpers/route.helper';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(private router: RouteHelper) { }

  appTitle:string = 'ROG';
  @Input()page: string;


  ngOnInit() {
    
  }

  navigate(toPage: string) {
    this.router.navigate(toPage);
  }

}
