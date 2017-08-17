import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// AUTH-GUARD
import { AuthGuardService } from '../services';

// COMPONENT
import { CafeteriaTypeComponent } from './cafeteria-type.component';

const routes: Routes = [
  { path: 'cafeteria-type', component: CafeteriaTypeComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CafeteriaTypeRoutingModule { }
