import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../services';

// COMPONENT
import { EditProductComponent } from './edit-product.component';

const routes: Routes = [
  {
    path: 'edit-product/:cafId/:catId/:id',
    component: EditProductComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditProductRoutingModule { }
