import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';

import { ActualitesRoutingModule } from './actualites-routing.module';
import { ActualitesComponent } from './actualites.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [ActualitesComponent, ContentComponent],
  imports: [
    CommonModule,
    ActualitesRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule,
    HttpClientModule
  ]
})
export class ActualitesModule { }
