import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './feature1-routing.module';
import { BookingViewComponent } from './booking-view/booking-view.component';


@NgModule({
  declarations: [ BookingViewComponent],
  imports: [
    CommonModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
