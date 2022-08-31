import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DownloadRoutingModule } from './download-routing.module';
import { DownloadComponent } from './download.component';
import { SharedModule } from '../../shared/shared.module';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { RECAPTCHA_SETTINGS, RECAPTCHA_LANGUAGE, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';

@NgModule({
  declarations: [DownloadComponent],
  imports: [
    CommonModule,
    DownloadRoutingModule,
    SharedModule,
    NgbModule,
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
export class DownloadModule { }
