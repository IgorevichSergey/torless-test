import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENT
import { ProductListComponent } from './product-list.component';

// GUARDS
import { AuthGuardService, TmpTimerService } from '../../services';

const routes: Routes = [
  { path: 'product-list/:cafId/:catId', component: ProductListComponent, canActivate: [ TmpTimerService, AuthGuardService ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductListRoutingModule { }
