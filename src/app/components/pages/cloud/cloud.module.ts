import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CloudRoutingModule } from './cloud-routing.module';
import { CloudComponent } from './cloud.component';
import { SharedModule } from '../../shared/shared.module';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { PlansComponent } from './plans/plans.component';
import { TextblockComponent } from './textblock/textblock.component';
import { VideoblockComponent } from './videoblock/videoblock.component';


@NgModule({
  declarations: [CloudComponent, BlogpostComponent, PlansComponent, TextblockComponent, VideoblockComponent],
  imports: [
    CommonModule,
    CloudRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class CloudModule { }
