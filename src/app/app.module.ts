import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbModule } from 'angular-crumbs';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './preloader/preloader.component';
//import { ActualitesComponent } from './components/pages/actualites/actualites.component';
//import { FormationsComponent } from './components/pages/formations/formations.component';
//import { ConseilComponent } from './components/pages/conseil/conseil.component';
//import { CloudComponent } from './components/pages/cloud/cloud.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    //ActualitesComponent,
    //FormationsComponent,
    //ConseilComponent,
    //CloudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
    NgbModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
