import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorHomeComponent,
    data: { title: 'landing' },
    children: [
      { path: '', redirectTo: 'admin' },
      {
        path: 'admin',
        data: { title: 'Admin' },
        loadChildren: () =>
          import('../features/admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: 'meds',
        data: { title: 'Medication' },
        loadChildren: () =>
          import('../features/meds/meds.module').then((m) => m.MedsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorRoutingModule {}
