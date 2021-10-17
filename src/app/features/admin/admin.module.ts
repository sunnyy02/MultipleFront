import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [AdminViewComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
