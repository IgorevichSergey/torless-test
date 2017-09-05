import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../../services';

// COMPONENT
import { ManagerListComponent } from './manager-list.component';

const routes: Routes = [
  {
    path: 'manager-list',
    component: ManagerListComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerListRoutingModule { }
