import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  displayVision: boolean = true;

  @Input() page: string = "about";

  currentPage: string = "vision";

  constructor() { }

  ngOnInit() {
  }

  changePageContent(navSection: string) {
    switch(navSection.toLowerCase()) {
      case "leadership":
        this.displayVision = false;
        this.currentPage ="leadership";
      break;
      case "vision":
        this.displayVision = true;
        this.currentPage = "vision";
      break; 
    }
  }

}
