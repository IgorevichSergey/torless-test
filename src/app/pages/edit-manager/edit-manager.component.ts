import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService, EventService } from '../../services';

import { REG_EXPS } from '../../constants';

@Component({
  selector: 'app-edit-manager',
  templateUrl: './edit-manager.component.html',
  styleUrls: ['./edit-manager.component.scss']
})
export class EditManagerComponent implements OnInit {
  manager: any = {};

  public passwords: {
    [key: string]: string
  } = {
    main: '',
    confirm: ''
  };

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

  private _emailRegExp: RegExp = REG_EXPS.email;
  private _passwordRegExp: RegExp = REG_EXPS.password;

  private _managerId: number;
  private _cafeteriaId: number;

  private _bufferEmail: string;

  constructor(
    private router: Router,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((param) => {
        this._managerId = +param.id;
        this.__getManager(+param.id);
      });

    this.eventService.headerText$.emit('');
  }

  public updateManager(manager): void {

    this.userService.editManager(this._managerId, this._cafeteriaId, {
      mn_name: manager.name,
      mn_last_name: manager.last_name,
      mn_phone: manager.phone,
      mn_email: manager.email,
      mn_pass: manager.password
    }).then((response) => {
      console.log('manager was updated', response);
      this.goBack();
    });
  }

  public goBack(): void {
    this.router.navigateByUrl('/manager-list');
  }

  checkEmail(email: string): void {
    if (email && email !== this._bufferEmail) {
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

  isButtonDisabled(): boolean {
    let disable = false;
    for (const key in this.manager) {
      if (key !== 'id' &&  key !== 'passport_id' && (!this.manager[key] || this.manager[key].length < 2)) {
        disable = true;
      }
    }

    if (this.__hasError()) {
      disable = true;
    }

    if (this.passwords.main) {
      disable = this.passwords.main !== this.passwords.confirm;
    }

    return disable;
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

  ////
  private __getManager(id: number): void {
    this.userService.getManagerById(id).then((response) => {
      console.log('response', response);
      this.manager = response.data;
      this.manager.phone = this.phoneFormatter(this.manager.phone);
      this._bufferEmail = this.manager.email;
    }, () => {
      console.log('reject')
      this.manager = {};
    });
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
