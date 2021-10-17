import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      data: { name: 'default', modules: ['all'] },
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: 'home',
      data: { name: 'home', title: 'Home', modules: ['default'] },
      loadChildren: () =>
        import('./patient/patient.module').then((m) => m.PatientModule),
    },
    {
      path: 'home',
      data: { name: 'home', title: 'home', modules: ['doctor'] },
      loadChildren: () =>
        import('./doctor/doctor.module').then((m) => m.DoctorModule),
    },
  ];