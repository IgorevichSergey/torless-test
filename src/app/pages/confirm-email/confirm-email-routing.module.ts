import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuardService } from '../../services';

// COMPONENT
import { ConfirmEmailComponent } from './confirm-email.component';

const routes: Routes = [
  {
    path: 'confirm-email/:token',
    component: ConfirmEmailComponent
    // canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmEmailRoutingModule { }
