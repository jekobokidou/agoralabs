import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { ServiceComponent } from './service/service.component';
import { VideoComponent } from './video/video.component';
import { LatestserviceComponent } from './latestservice/latestservice.component';
import { WhyusComponent } from './whyus/whyus.component';
import { CasesComponent } from './cases/cases.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { FactsComponent } from './facts/facts.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { BrandsComponent } from './brands/brands.component';
import { IntrovideoComponent } from './introvideo/introvideo.component';

import { RECAPTCHA_SETTINGS, RECAPTCHA_LANGUAGE, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { environment } from '../../../../environments/environment';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent, BannerComponent, IntrovideoComponent ,ServiceComponent, VideoComponent, LatestserviceComponent, WhyusComponent, CasesComponent, TeamComponent, ContactComponent, FactsComponent, BlogpostComponent, BrandsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,    
    RecaptchaModule,
    RecaptchaFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
    {
      provide: RECAPTCHA_LANGUAGE,
      useValue: "fr", // use French language
    },
  ]

})
export class HomeModule { }
