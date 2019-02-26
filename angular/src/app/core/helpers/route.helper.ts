import { Router } from "@angular/router";
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})

export class RouteHelper {

    constructor(private router: Router) {
    }

    navigate(route: string) {
        this.router.navigate(['/'+route]);
    }

    getServerUrl() {
        return environment.serverUrl;
      }
    
    buildUrl(route: string) {
    var validRoute = route;
    if (route.substring(0, 1) === "/") {
        validRoute = route.slice(1, route.length);
    }
    return `${this.getServerUrl()}${validRoute}`;
    }

}