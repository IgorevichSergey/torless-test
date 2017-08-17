import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  createManager(createdManagerUser: CreatedManagerUser) {
    this.userService.registerManagerUser(createdManagerUser).then((data) => {
      console.log('data', data);
      this._goTo('/categories-list');
    }, (error) => {
      console.log('error', error);
    })
  }

  goBack() {
    this._goTo('/categories-list');
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

  ///////
  private _goTo(url: string): void {
    this.router.navigateByUrl(url);
  }

}
