import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService, ModalService } from '../../services';

import { SelectCafeteriaModalComponent } from '../../modals/select-cafeteria-modal/select-cafeteria-modal.component';


@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.scss', '../pages.scss']
})
export class ManagerListComponent implements OnInit {
  managers: Array<Object>;

  constructor(
    private router: Router,
    private userService: UserService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.__getManagerList();
  }

  public editManager(manager): void {
    this.router.navigate(['edit-manager', manager.id]);
  }

  public addManager(): void {
    this.modalService.create(SelectCafeteriaModalComponent, null, 'small').then((response) => {
      this.router.navigate(['create-cafeteria-manager', response.id]);
    }, () => {
      console.log('error');
    });
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
