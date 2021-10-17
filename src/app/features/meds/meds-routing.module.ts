import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedsViewComponent } from './meds-view/meds-view.component';


const routes: Routes = [
  { path: '', component: MedsViewComponent, data: { title: 'Medication' } }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedsRoutingModule { }
