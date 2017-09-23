import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// GUARDS
import { AuthGuardService, TmpTimerService } from '../../services';

// COMPONENT
import { EditCafeteriaComponent } from './edit-cafeteria.component';

const routes: Routes = [
  {
    path: 'edit-cafeteria/:cafId',
    component: EditCafeteriaComponent,
    canActivate: [AuthGuardService, TmpTimerService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditCafeteriaRoutingModule { }
