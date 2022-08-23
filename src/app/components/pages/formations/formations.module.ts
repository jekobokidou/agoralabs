import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormationsRoutingModule } from './formations-routing.module';
import { FormationsComponent } from './formations.component';
import { SharedModule } from '../../shared/shared.module';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { PlansComponent } from './plans/plans.component';
import { TextblockComponent } from './textblock/textblock.component';
import { VideoblockComponent } from './videoblock/videoblock.component';
import { WhyusComponent } from './whyus/whyus.component';


@NgModule({
  declarations: [FormationsComponent, WhyusComponent, BlogpostComponent, PlansComponent, TextblockComponent, VideoblockComponent],
  imports: [
    CommonModule,
    FormationsRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class FormationsModule { }
