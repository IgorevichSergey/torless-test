import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../services';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit {
  public email: string;
  public confirmError: boolean = false;
  public confirmSuccess: boolean = false;

  private _emailRegExp: RegExp = /(.+)@(.+){2,}\.(.+){2,}/;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((param) => {
        console.log('param', param);
      });
  }

  public confirm(email: string): void {
    this.userService.confirmEmail(email).then((data) => {
      console.log('data', data);
      this.confirmError = false;
      this.confirmSuccess = true;
    }, (error) => {
      this.confirmError = true;
      this.confirmSuccess = false;
    });
  }

  public validEmail(email: string): boolean {
    if (email) {
      return this._emailRegExp.test(email);
    } else {
      return false;
    }
  }
}
