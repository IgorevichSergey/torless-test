import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../services';

// COMPONENT
import { CategoriesListComponent } from './categories-list.component';

const routes: Routes = [
  {
    path: 'categories-list/:id',
    component: CategoriesListComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesListRoutingModule { }
