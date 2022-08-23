import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ConseilRoutingModule } from './conseil-routing.module';
import { ConseilComponent } from './conseil.component';
import { SharedModule } from '../../shared/shared.module';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { PlansComponent } from './plans/plans.component';
import { TextblockComponent } from './textblock/textblock.component';
import { VideoblockComponent } from './videoblock/videoblock.component';


@NgModule({
  declarations: [ConseilComponent, BlogpostComponent, PlansComponent, TextblockComponent, VideoblockComponent],
  imports: [
    CommonModule,
    ConseilRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class ConseilModule { }
