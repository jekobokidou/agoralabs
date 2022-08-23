import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualitesComponent } from './actualites.component';

const routes: Routes = [{ path: '', component: ActualitesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActualitesRoutingModule { }
