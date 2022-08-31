import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  apiSendMailUrl: string = environment.apiSendMailUrl;
  access_token: string = environment.access_token;//api gateway access token
  recaptchatoken: string|undefined;//recaptcha token
  editmode: boolean = true;

  constructor(private http: HttpClient) { 
    this.recaptchatoken = undefined;
  }

  public formResponse;
  public formStatus;
  public sendEmail(e: Event) {
    e.preventDefault();
    var contactForm = <HTMLFormElement>document.getElementById('contact-form');
    emailjs.sendForm('smtp_server', 'template_8uQnFG6N_clone', e.target as HTMLFormElement, 'user_XWPdjpTv0DgrQb9FN3tWr')
      .then((result: EmailJSResponseStatus) => {
        //reset here
        contactForm.reset();
        this.formStatus = 'success';
        this.formResponse = 'Your message has been sent successfully, we will get back to you shortly.';
      }, (error) => {
        this.formStatus = 'danger';
        this.formResponse = 'There was an error submitting your form.';
      });
  }

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

    //console.debug(`Token [${this.recaptchatoken}] generated`);
  }

  isEmptyString(str) {
      return !(str && str.length > 0);
  }

  validateContactForm(form: NgForm) {

    if (this.isEmptyString(form.value.from_name) 
    || this.isEmptyString(form.value.to_email)
    || this.isEmptyString(form.value.to_phone)
    || this.isEmptyString(form.value.to_subject)
    || this.isEmptyString(form.value.message_html)) {

      this.setDanger();

    }
  }

  setSuccess() {
    this.formStatus = 'success';
    this.formResponse = 'Votre message a été envoyé avec succès, nous vous répondrons sous peu.';
    this.editmode = true;
  }

  setDanger() {
    this.formStatus = 'danger';
    this.formResponse = 'Une erreur a été détectée, assurez-vous de remplir tous les champs.';
    this.editmode = true;
  }

  httpPostContact(form: NgForm) {



    const headers = new HttpHeaders({Authorization: this.access_token});

    this.http.post(this.apiSendMailUrl,
        {
          "username": form.value.from_name,
          "useremail": form.value.to_email,
          "userphone": form.value.to_phone,
          "usersubject": form.value.to_subject,
          "usermsg": form.value.message_html
        }, {'headers':headers})
        .subscribe(
            (val) => {
              this.setSuccess();
              form.reset();
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

}
