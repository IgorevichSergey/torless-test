import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// GUARDS
import { AuthGuardService, TmpTimerService } from '../../services';

// COMPONENT
import { CategoriesListComponent } from './categories-list.component';

const routes: Routes = [
  {
    path: 'categories-list/:cafId',
    component: CategoriesListComponent,
    canActivate: [AuthGuardService, TmpTimerService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesListRoutingModule { }
