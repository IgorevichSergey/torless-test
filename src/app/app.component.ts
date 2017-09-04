import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PAGES_CONFIG } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public visible: {[key: string]: boolean} = {
    info: true,
    breadcrumbs: true,
    companyLogo: false
  };

  constructor(
    private router: Router
  ) {
    router.events
      .debounce(value => Observable.timer(500))
      .subscribe((data: NavigationEnd) => {
      this.__subHeaderElementsVisible(data.url);
      console.log('data ==> ', data);
    });
  }


  private __subHeaderElementsVisible(url: string): void {
    return this.visible = PAGES_CONFIG['sub-header'][url];
  }
}
