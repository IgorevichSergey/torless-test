import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../../services';

// COMPONENT
import { EditManagerComponent } from './edit-manager.component';

const routes: Routes = [
  {
    path: 'edit-manager/:id',
    component: EditManagerComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditManagerRoutingModule { }
