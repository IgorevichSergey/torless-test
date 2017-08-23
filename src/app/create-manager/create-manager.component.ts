import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CreatedManagerUser } from '../custom-classes';

import { UserService } from '../services';


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
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((param) => {
        this._cafeteriaId = +param.id;
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

  ///////
  private _goTo(url: string): void {
    this.router.navigateByUrl(url);
  }

}
