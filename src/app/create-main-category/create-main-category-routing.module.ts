import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENT
import { CreateMainCategoryComponent } from './create-main-category.component';

const routes: Routes = [
  { path: 'create-main-category', component: CreateMainCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateMainCategoryRoutingModule { }
