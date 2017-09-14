import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// GUARDS
import { AuthGuardService, TmpTimerService } from '../../services';

// COMPONENT
import { CreateMainCategoryComponent } from './create-main-category.component';

const routes: Routes = [
  { path: 'create-main-category', component: CreateMainCategoryComponent, canActivate: [ AuthGuardService, TmpTimerService ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateMainCategoryRoutingModule { }
