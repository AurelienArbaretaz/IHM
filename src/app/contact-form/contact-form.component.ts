import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  IsSend: boolean = false;
  mail: string = "";
  mailSend: string = "";
  content: string = "";
  contentSend: string = "";
  error: string = "";
  isError: boolean = false;
  send(): void {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.mail) == false || this.mail =="") {
      this.error = "Veuillez entrer une adresse mail valide";
      this.isError = true;
    }
    else if (this.content == "") {
      this.error = "Veuillez entrer un message";
      this.isError = true;
    }
    else {
      this.isError = false;
        this.IsSend = true;
        this.mailSend = this.mail;
        this.contentSend = this.content;
    }

  }
}
