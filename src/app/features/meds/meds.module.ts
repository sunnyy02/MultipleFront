import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedsRoutingModule } from './meds-routing.module';
import { MedsViewComponent } from './meds-view/meds-view.component';


@NgModule({
  declarations: [MedsViewComponent],
  imports: [
    CommonModule,
    MedsRoutingModule
  ]
})
export class MedsModule { }
