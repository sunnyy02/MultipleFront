import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminViewComponent } from './admin-view/admin-view.component';

const routes: Routes = [
  { path: '', component: AdminViewComponent, data: { title: 'Medication' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
