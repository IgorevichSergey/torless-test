import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services';


@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.scss']
})
export class ManagerListComponent implements OnInit {
  managers: Array<Object>;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.__getManagerList();
  }

  public editManager(manager): void {
    this.router.navigate(['edit-manager', manager.id]);
  }


  ///
  private __getManagerList(): void {
    this.userService.getManagerList().then((response) => {
      this.managers = response.data;
      console.log('this.managers', this.managers)
    }, (errors) => {
      console.log('errors', errors);
    });
  }

}
