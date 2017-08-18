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

  ///////
  private _goTo(url: string): void {
    this.router.navigateByUrl(url);
  }

}
