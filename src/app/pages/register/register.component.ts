import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { UserService } from '../../services';

import { CreatedUser } from '../../custom-classes';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public createdUser: CreatedUser = new CreatedUser();
  public registrationError: boolean = false;
  public confirmedPassword: string = '';
  public confirmPasswordError: boolean = false;

  public emailErrorMessage: string;

  public formErrors = {
    emailField: false
  };

  public formErrorMessages = {
    email: ''
  };

  private _errors = {
    invalidEmail: 'דוא"ל שנכתב שגוי',
    emailAlreadyExist: 'הדוא"ל כבר בשימוש'
  };


  private _emailRegExp: RegExp = /(.+)@(.+){2,}\.(.+){2,}/;


  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {}

  registerUser(createdUser: CreatedUser): void {
    this.userService.registration(createdUser).then((response) => {
      this.registrationError = false;
      console.log('response', response);
      // todo: go to next page
      this._goTo('/cafeteria-type');
    }, (error) => {
      this.registrationError = true;
    });
  }

  checkEmail(email: string): void {
    if(email) {
      if(this._emailRegExp.test(email)) {
        this.userService.checkUserEmail(email).then((data) => {
          this.formErrors.emailField = false;
        }, (error) => {
          this.formErrors.emailField = true;
          this.formErrorMessages.email = this._errors.emailAlreadyExist;
        });
      } else {
        this.formErrors.emailField = true;
        this.formErrorMessages.email = this._errors.invalidEmail;
      }
    }

  }

  public passwordsCheck(firstPass, secondPass): void {
    this.confirmPasswordError = ((firstPass !== secondPass) && firstPass !== '' && secondPass !== '');
  }

  public isButtonDisabled(user): boolean {
    let result: boolean = (this.confirmedPassword !== user.us_pass);

    for (let key in user) {
      if (!user[key]) {
        result = true;
      }
    }

    return result;
  }

  public termsAndConditions(): void {
    // todo: replace, or think about it
    window.open('https://igorevichsergey.github.io/torless-test//terms-and-conditions', '_blank');
  }


  /////
  private _goTo(url: string, params?: NavigationExtras): void {
    this.router.navigateByUrl(url, params);
  }

}
