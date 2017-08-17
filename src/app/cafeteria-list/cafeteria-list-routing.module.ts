import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../services';

// COMPONENT
import { CafeteriaListComponent } from './cafeteria-list.component';

const routes: Routes = [
  {
    path: 'cafeteria-list',
    component: CafeteriaListComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CafeteriaListRoutingModule { }
