import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService, EventService } from '../../services';

@Component({
  selector: 'app-edit-manager',
  templateUrl: './edit-manager.component.html',
  styleUrls: ['./edit-manager.component.scss']
})
export class EditManagerComponent implements OnInit {
  manager: any = {};

  public confirmPassword: string;

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

  private _managerId: number;
  private _cafeteriaId: number;

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
      name: manager.name,
      last_name: manager.last_name,
      phone: manager.phone,
      email: manager.email,
      password: manager.password
    }).then((response) => {
      console.log('manager was updated', response);
    });
  }

  public goBack(): void {
    this.router.navigateByUrl('/manager-list');
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

  isButtonDisabled(): boolean {
    let disable = false;
    for (const key in this.manager) {
      if (!this.manager[key] || this.manager[key].length < 2) {
        disable = true;
      }
    }

    if (!this.confirmPassword || !this.manager.mn_pass || (this.confirmPassword !== this.manager.mn_pass)) {
      disable = true;
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
    }, () => {
      console.log('reject')
      this.manager = {};
    });
  }

}
