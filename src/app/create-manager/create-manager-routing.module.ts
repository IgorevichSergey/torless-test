import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../services';

// COMPONENT
import { CreateManagerComponent } from './create-manager.component';

const routes: Routes = [
  {
    path: 'create-cafeteria-manager',
    component: CreateManagerComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateManagerRoutingModule { }
