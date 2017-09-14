import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// GUARDS
import { AuthGuardService, TmpTimerService } from '../../services';

// COMPONENT
import { CreateCafeteriaComponent } from './create-cafeteria.component';

const routes: Routes = [
  { path: 'create-cafeteria/:typeId', component: CreateCafeteriaComponent, canActivate: [ AuthGuardService, TmpTimerService ] },
  { path: 'create-cafeteria', redirectTo: 'cafeteria-type' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateCafeteriaRoutingModule { }
