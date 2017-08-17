import { Component, OnInit } from '@angular/core';
import { UserService } from '../services';

@Component({
  selector: 'app-sms-confirm',
  templateUrl: './sms-confirm.component.html',
  styleUrls: ['./sms-confirm.component.scss']
})
export class SmsConfirmComponent implements OnInit {
  public smsCode: number;
  public confirmError: boolean = false;
  public confirmSuccess: boolean = false;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {}

  public confirm(smsCode: number): void {
    this.userService.confirmUser(smsCode).then((data) => {
      this.confirmError = false;
      this.confirmSuccess = true;
    }, (error) => {
      this.confirmError = true;
      this.confirmSuccess = false;
    });
  }

}
