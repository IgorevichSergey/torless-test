import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../../services';

// COMPONENT
import { EditCafeteriaComponent } from './edit-cafeteria.component';

const routes: Routes = [
  {
    path: 'edit-cafeteria/:id',
    component: EditCafeteriaComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditCafeteriaRoutingModule { }
