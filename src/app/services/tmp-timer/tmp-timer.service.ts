import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable()
export class TmpTimerService implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService
  ) {
  }

  canActivate() {
    const loggedTime: number = this.userService.loggedTime(),
          currentTime: number = new Date().getTime(),
          timeHoursDiff: number = (Math.abs(loggedTime - currentTime) / (1000 * 3600));

    if (timeHoursDiff >= 1) {
      console.log('tmp service error')
      this.userService.logout().then(() => {
        this.router.navigateByUrl('/login');
      });
      return false;
    }


    return true;
  }

}

