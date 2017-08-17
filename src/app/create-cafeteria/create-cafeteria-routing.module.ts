import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// AUTH-GUARD
import { AuthGuardService } from '../services';

// COMPONENT
import { CreateCafeteriaComponent } from './create-cafeteria.component';

const routes: Routes = [
  { path: 'create-cafeteria/:typeId', component: CreateCafeteriaComponent, canActivate: [AuthGuardService] },
  { path: 'create-cafeteria', redirectTo: 'cafeteria-type' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateCafeteriaRoutingModule { }
