import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingViewComponent } from './booking-view/booking-view.component';

const routes: Routes = [
  { path: '', component: BookingViewComponent, data: { title: 'Booking' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {}
