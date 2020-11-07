import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  isCollapsed: boolean = true;
  activeHeader: string = 'HOME';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    window.addEventListener('scroll', event => {
      if(window.scrollY > 50){
        document.getElementById("nav-bar-header").classList.add("background-header")
      }
      if(window.scrollY <= 50){
        document.getElementById("nav-bar-header").classList.remove("background-header")
      }
    }, true);

    this.router.events
          .pipe(filter(event => event instanceof NavigationEnd))
          .subscribe((routeChange: NavigationEnd) => {
            debugger
              if (routeChange) {
                if (routeChange.url.startsWith('/home')) {
                  this.activeHeader = 'HOME';
                } else if (routeChange.url.startsWith('/products')) {
                  this.activeHeader = 'PRODUCT';
                } else if (routeChange.url.startsWith('/about')) {
                  this.activeHeader = 'ABOUT';
                } else if (routeChange.url.startsWith('/contact')) {
                  this.activeHeader = 'CONTACT';
                }
              }
            });

    const currentUrl = this.router.url;

    if(currentUrl){
      if (currentUrl.startsWith('/home')) {
        this.activeHeader = 'HOME';
      } else if (currentUrl.startsWith('/products')) {
        this.activeHeader = 'PRODUCT';
      } else if (currentUrl.startsWith('/about')) {
        this.activeHeader = 'ABOUT';
      } else if (currentUrl.startsWith('/contact')) {
        this.activeHeader = 'CONTACT';
      }
    }
  }

}
