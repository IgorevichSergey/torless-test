import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
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

}
