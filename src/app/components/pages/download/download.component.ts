import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  apiStoreEmailUrl: string = environment.apiStoreEmailUrl;
  access_token: string = environment.access_token;//api gateway access token
  recaptchatoken: string|undefined;//recaptcha token
  editmode: boolean = true;

  constructor(private http: HttpClient) { 
    this.recaptchatoken = undefined;
  }
  classname = "footer-area footer-area-2 bg_cover";
  ftbgimage = "assets/images/footer-bg.jpg";
  ftlogo = "assets/images/logo-1.1.png";
  ftshape = "";


  public formResponse;
  public formStatus;

  ngOnInit(): void {
  }

  public send(form: NgForm): void {

    this.editmode = false;

    this.validateContactForm(form);

    this.validateReCaptcha(form);

  }

  validateReCaptcha(form: NgForm){
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      this.setDanger();
      return;
    }

    this.httpPostContact(form);

    console.debug(`Token [${this.recaptchatoken}] generated`);
  }

  isEmptyString(str) {
      return !(str && str.length > 0);
  }

  validateContactForm(form: NgForm) {

    if (this.isEmptyString(form.value.to_email)) {

      this.setDanger();

    }
  }

  setSuccess() {
    this.formStatus = 'success';
    this.formResponse = 'Votre e-mail a été reçu avec succès, nous vous contacterons sous peu.';
    this.editmode = true;
  }

  setDanger() {
    this.formStatus = 'danger';
    this.formResponse = 'Une erreur a été détectée, assurez-vous de saisir un e-mail correct.';
    this.editmode = true;
  }

  httpPostContact(form: NgForm) {

    const headers = new HttpHeaders({Authorization: this.access_token});

    this.http.post(this.apiStoreEmailUrl,
        {
          "useremail": form.value.to_email
        }, {'headers':headers})
        .subscribe(
            (val) => {
              this.setSuccess();
              this.download();
                console.log("POST call successful value returned in body", 
                            val);
            },
            response => {
              this.setDanger();
                console.log("POST call in error", response);
            },
            () => {
                console.log("The POST observable is now completed.");
            });
    }  

    download(){
      var downloadLinkElement = document.getElementById('download-link');
      //console.log(downloadLinkElement);
      downloadLinkElement.click();
    }

}
