import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// GUARDS
import { AuthGuardService, TmpTimerService } from '../../services';

// COMPONENT
import { CreateManagerComponent } from './create-manager.component';

const routes: Routes = [
  {
    path: 'create-cafeteria-manager/:id',
    component: CreateManagerComponent,
    canActivate: [AuthGuardService, TmpTimerService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateManagerRoutingModule { }
