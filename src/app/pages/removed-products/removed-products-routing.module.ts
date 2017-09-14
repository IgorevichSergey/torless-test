import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../../services';
import { TmpTimerService } from '../../services';

// COMPONENT
import { RemovedProductsComponent } from './removed-products.component';

const routes: Routes = [
  {
    path: 'removed-products/:cafId/:catId',
    component: RemovedProductsComponent,
    canActivate: [AuthGuardService, TmpTimerService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemovedProductsRoutingModule { }
