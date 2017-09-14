import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// GUARDS
import { AuthGuardService, TmpTimerService } from '../../services';

// COMPONENT
import { CafeteriaTypeComponent } from './cafeteria-type.component';

const routes: Routes = [
  { path: 'cafeteria-type', component: CafeteriaTypeComponent, canActivate: [AuthGuardService, TmpTimerService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CafeteriaTypeRoutingModule { }
