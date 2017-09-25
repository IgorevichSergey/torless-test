import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CreatedManagerUser } from '../../custom-classes';

import { UserService, CafeteriaService, EventService } from '../../services';


@Component({
  selector: 'app-create-manager',
  templateUrl: './create-manager.component.html',
  styleUrls: ['./create-manager.component.scss']
})
export class CreateManagerComponent implements OnInit {
  public complete: number = 75;
  public createdManagerUser: CreatedManagerUser = new CreatedManagerUser();
  public confirmPassword: string;

  private _cafeteriaId: number;

  public formErrors = {
    emailField: false,
    passwordField: false,
    confirmPasswordField: false
  };

  public formErrorMessages = {
    email: '',
    password: ''
  };

  private _errors = {
    invalidEmail: 'דוא"ל שנכתב שגוי',
    emailAlreadyExist: 'הדוא"ל כבר בשימוש',
    invalidPassword: 'חייב להכיל לפחות 6 סמלים'
  };

  private _emailRegExp: RegExp = /(.+)@(.+){2,}\.(.+){2,}/;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private cafeteriaService: CafeteriaService,
    private eventService: EventService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((param) => {
        this._cafeteriaId = +param.cafId;
        this.cafeteriaService.getCafeteriaById(this._cafeteriaId).then((response) => {
          this.eventService.headerText$.emit(response.data.cafeteria.caf_name);
        });
      });
  }

  createManager(createdManagerUser: CreatedManagerUser) {
    this.userService.registerManagerUser(createdManagerUser).then((data) => {
      console.log('data', data);
      this.router.navigate(['categories-list', this._cafeteriaId]);
      // this._goTo('/categories-list');
    }, (error) => {
      console.log('error', error);
    });
  }

  goBack() {
    // this._goTo('/categories-list');
    this.router.navigate(['categories-list', this._cafeteriaId]);
  }

  isButtonDisabled(): boolean {
    let disable = false;
    for (const key in this.createdManagerUser) {
      if (!this.createdManagerUser[key] || this.createdManagerUser[key].length < 2) {
        disable = true;
      }
    }

    if (this.__hasError()) {
      disable = true;
    }

    if (!this.confirmPassword || !this.createdManagerUser.mn_pass || (this.confirmPassword !== this.createdManagerUser.mn_pass)) {
      disable = true;
    }

    return disable;
  }

  checkEmail(email: string): void {
    if (email) {
      if (this._emailRegExp.test(email)) {
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

  checkPassword(password: string, type): void {
    if (password) {
      if (password.length >= 6) {
        this.formErrors[type] = false;
      } else {
        this.formErrors[type] = true;
        this.formErrorMessages.password = this._errors.invalidPassword;
      }
    }
  }

  phoneFormatter(t: string): any {
    const numbers: string = t ? t.replace(/\D/g, '') : '',
      dashes: Object = {
        3: '-',
        5: '-',
        7: '-'
      },
      len = (numbers.length <= 10) ? numbers.length : 10;

    let result: string = '';

    for (let i = 0; i < len; i++) {
      result += (dashes[i] || '') + numbers[i];
    }

    return result;
  }

  ///////
  private _goTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  private __hasError(): boolean {
    let result: boolean = false;
    for (const key in this.formErrors) {
      if (this.formErrors[key]) {
        result = true;
      }
    }

    return result;
  }

}
