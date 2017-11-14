import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { LoginUser } from '../../custom-classes';

import { UserService } from '../../services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../pages.scss']
})
export class LoginComponent implements OnInit {
  public user: LoginUser = new LoginUser(); // 'torless_1@mailinator.com', 'qwerty123' //('sergiosy@sergiosy.com', '111111');
  public loginError: boolean = false;
  public invalidForm: boolean = false;
  public showSpinner: boolean = false;

  // listOne: Array<string> = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {}

  forgotPassword() {
    console.log('forgot password?');
  }

  public login(user: LoginUser): void {
    this.showSpinner = true;
    this.userService.login(user).then((data) => {
      this.loginError = false;
      this.showSpinner = false;
      this._goTo('/welcome-page');
    }, (reject) => {
      this.loginError = true;
      this.showSpinner = false;
    });
  }

  public submitButtonDisabled(user: LoginUser): boolean {
    // validation can be added here
    return !user.us_log_email || !user.us_log_pass;
  }

  public goToRegistration() {
    this._goTo('/registration');
  }

  ////
  private _goTo(url: string, params?: NavigationExtras): void {
    this.router.navigateByUrl(url, params);
  }

}
