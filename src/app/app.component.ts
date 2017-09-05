import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PAGES_CONFIG } from './constants';

// Services
import { UserService, CafeteriaService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public loggedIn: boolean;
  public cafeteriasLength: number = 0;

  public visible: {[key: string]: boolean} = {
    info: false,
    breadcrumbs: false,
    companyLogo: false
  };


  private currentUrl: string;

  constructor(
    private router: Router,
    private userService: UserService,
    private cafeteriaService: CafeteriaService

  ) {
    /**
     * when app init
     */
    this.__isLoggedIn();
    this.__getCafeteriasList(this.loggedIn);


    router.events
      .debounce(value => Observable.timer(100))
      .subscribe((data: NavigationEnd) => {
      this.currentUrl = data.url;
        /**
         * when url update
         */
        this.__subHeaderElementsVisible(data.url);
        this.__isLoggedIn();
        this.__getCafeteriasList(this.loggedIn);
      });
  }

  public logOut(): void {
    // todo: confirm modal
    this.userService.logout().then(() => {
      this.router.navigateByUrl('/login');
    });
  }

  public isActiveLink(linkTo): boolean {
    return this.currentUrl ? (this.currentUrl.indexOf(linkTo) === 0) : false;
  }

  public goTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  ////
  private __subHeaderElementsVisible(url: string): void {
    const key: string = ((_url) => {
      for (const _key in PAGES_CONFIG['sub-header']) {
        if (_url && _url.indexOf(_key) === 0) {
          return _key;
        }
      }
    })(url);

    if (PAGES_CONFIG['sub-header'][key]) {
      this.visible = PAGES_CONFIG['sub-header'][key];
    }
  }

  private __isLoggedIn(): void {
    this.loggedIn = this.userService.isLoggedIn();
  }

  private __getCafeteriasList(loggedIn: boolean): void {
    if (loggedIn) {
      this.cafeteriaService.getUserCafeterias().then((response) => {
        if (response && response.data && response.data.length) {
          const cafeterias = response.data.filter( item => item && item.id && item.id > 0);
          this.cafeteriasLength = cafeterias.length;
        } else {
          this.cafeteriasLength = 0;
        }
      });
    }

  }
}
