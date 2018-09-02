import { Component, OnInit, Input } from '@angular/core';
import { RouteHelper } from '../../core/helpers/route.helper';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: RouteHelper) { }

  appTitle:string = 'ROG';
  @Input()page: string;


  ngOnInit() {

  }

  navigate(toPage: string) {
    this.router.navigate(toPage);

  }

}
