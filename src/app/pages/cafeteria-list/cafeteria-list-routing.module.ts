import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// GUARDS
import { AuthGuardService, TmpTimerService } from '../../services';

// COMPONENT
import { CafeteriaListComponent } from './cafeteria-list.component';

const routes: Routes = [
  {
    path: 'welcome-page',
    component: CafeteriaListComponent,
    canActivate: [ AuthGuardService, TmpTimerService ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CafeteriaListRoutingModule { }
