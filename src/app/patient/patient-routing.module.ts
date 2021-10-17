import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'landing', modules: 'default' },
    children: [
      { path: '', redirectTo: 'booking' },
      {
        path: 'booking',
        data: { title: 'Book appointment' },
        loadChildren: () =>
          import('../features/booking/booking.module').then(
            (m) => m.BookingModule
          ),
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
export class PatientRoutingModule {}
