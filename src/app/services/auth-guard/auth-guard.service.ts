import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
// import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  canActivate() {
    let result: boolean = this.userService.isLoggedIn();
    if(!result) {
      this.router.navigateByUrl('/login');
    }
    return result;
  }

  // canActivate(route: ActivatedRouteSnapshot,
  //             state: RouterStateSnapshot): Promise<boolean> | boolean {
  //
  //   return new Promise((resolve, reject) => {
  //     this.userService.isTokenValid().then(e => {
  //       this.router.navigateByUrl(state.url, { skipLocationChange: true });
  //       resolve(true);
  //     }, (error) => {
  //       console.log('error', error);
  //       resolve(false);
  //     });
  //   });
  // }

}
