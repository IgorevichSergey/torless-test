import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CategoryService } from '../services';

import { CreatedMainCategoryClass } from '../custom-classes';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  public categories: any[];
  public newCategory: CreatedMainCategoryClass;

  private _cafeteriaId: number;

  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((param) => {
        this._cafeteriaId = +param.id;
        this._getCategoriesForCafeteria(+param.id);
      });
  }

  public saveNewCategory(newCategory: CreatedMainCategoryClass): void {
    newCategory.ct_caf_id = this._cafeteriaId;
    this.categoryService.createMainCategory(newCategory).then((response) => {
      this._getCategoriesForCafeteria(this._cafeteriaId);
      this.newCategory = null;
    }, (error) => {
      console.log('error ==> ', error);
    });
  }

  public addNewCategory(): void {
    this.newCategory = new CreatedMainCategoryClass();
  }

  public goToProducts(catId): void {
    // this._goTo('/product-list');
    // ['MyCompB', {id: "someId", id2: "another ID"}]
    this.router.navigate(['product-list', this._cafeteriaId, catId]);
  }

  public categoriesDropped(): void {
    console.log('this.categories', this.categories);
  }

  ///
  private _getCategoriesForCafeteria(caf_id: number): void {
    this.categoryService.getCategoriesForCafeteria(caf_id).then((response) => {
      this.categories = response.data.categories;
    }, (error) => {
      console.log('error', error);
    });
  }

  private _goTo(url: string) {
    this.router.navigateByUrl(url);
  }

}
