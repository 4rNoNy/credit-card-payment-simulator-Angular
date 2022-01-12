import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  showNav = true;
  otherScroll = window.pageYOffset;

  x = fromEvent(document, 'scroll');

  constructor() {
    this.x.subscribe((res: any) => {
      const scroll = res.target.documentElement.scrollTop;

      if (scroll > 100) {
        this.showNav = false;
      }
      if (scroll < this.otherScroll) {
        this.showNav = true;
      }
      this.otherScroll = scroll;
    });
  }

  ngOnInit() {
  }

}
