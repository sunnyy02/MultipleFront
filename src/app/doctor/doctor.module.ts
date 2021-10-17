import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';


@NgModule({
  declarations: [DoctorHomeComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
