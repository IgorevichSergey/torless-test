import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CategoryService, CafeteriaService, EventService } from '../../services';

import { CreatedMainCategoryClass, UpdatedMainCategory } from '../../custom-classes';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss', '../pages.scss']
})
export class CategoriesListComponent implements OnInit {
  public categories: any[];
  public newCategory: CreatedMainCategoryClass;

  public editBuffer: any;

  private _cafeteriaId: number;

  constructor(
    private categoryService: CategoryService,
    private cafeteriaService: CafeteriaService,
    private eventService: EventService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((param) => {
        this._cafeteriaId = +param.cafId;
        this._getCategoriesForCafeteria(+param.cafId);
        this.cafeteriaService.getCafeteriaById(this._cafeteriaId).then((response) => {
          this.eventService.headerText$.emit(response.data.cafeteria.caf_name);
        });
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
    this.router.navigate(['product-list', this._cafeteriaId, catId]);
  }

  public categoriesDropped(): void {
    let orderedCategories: {cat_id: number, cat_pos: number}[] = [];
    this.categories.forEach((item, i) => {
      orderedCategories.push({
        cat_id: item.cat_id,
        cat_pos: i + 1
      });
    });

    this.categoryService.setCategoryOrder(this._cafeteriaId, orderedCategories);

  }

  public tmpCafeteriaList(): void {
    this.router.navigate(['welcome-page']);
  }

  public removeNewCategory(): void {
    this.newCategory = null;
  }

  public setEditMode(category: any): void {
    this.categories.forEach((item) => {
      // item.edit = (category.cat_id === item.cat_id);
      if(category.cat_id === item.cat_id) {
        this.editBuffer = this.__test(category);
        item.edit = true;
      } else {
        item.edit = false;
      }
    });
  }

  public editCategory(buffer: any): void {
    for(let i = 0, len = this.categories.length; i < len; i++ ) {
      if(buffer.cat_id === this.categories[i].cat_id) {
        if (buffer && buffer.category_name) {
          let updatedCategory: UpdatedMainCategory = new UpdatedMainCategory(this._cafeteriaId, buffer.cat_id, buffer.category_name, buffer.prod_col);
          // todo: add Update Category Method
          this.categoryService.updateMainCategory(updatedCategory).then((response) => {
            this.categories[i] = Object.assign({}, this.editBuffer);
          });
        } else {

          this.categories[i].edit = false;
        }


        break;
      }
    }
  }

  ///
  private _getCategoriesForCafeteria(caf_id: number): void {
    this.categoryService.getCategoriesForCafeteria(caf_id).then((response) => {
      this.categories = response.data.categories;
      console.log('this.categories',this.categories)
    }, (error) => {
      console.log('error', error);
    });
  }

  private _goTo(url: string) {
    this.router.navigateByUrl(url);
  }

  private __test(obj: Object) {
    let res: Object = {};
    for(let key in obj) {
      res[key] = obj[key]
    }

    return res;
  }

}
