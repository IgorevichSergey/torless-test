import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../services';

import { CreatedMainCategoryClass } from '../custom-classes';

@Component({
  selector: 'app-create-main-category',
  templateUrl: './create-main-category.component.html',
  styleUrls: ['./create-main-category.component.scss']
})
export class CreateMainCategoryComponent implements OnInit {
  public complete: number = 50;

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
  }

  createMainCategory() {

  }

}
