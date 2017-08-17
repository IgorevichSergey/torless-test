import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../services';

// COMPONENT
import { AddProductComponent } from './add-product.component';

const routes: Routes = [
  {
    path: 'add-product/:cafId/:catId',
    component: AddProductComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddProductRoutingModule { }
