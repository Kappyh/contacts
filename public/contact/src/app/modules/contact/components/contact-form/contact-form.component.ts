import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/shared/services/contact.service';
import { Contact } from 'src/app/shared/models/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  public contactForm: Contact;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactForm = new Contact();
  }

  public saveContact() {
    if(this.contactForm.name){
      this.contactService.create(this.contactForm).subscribe(data => {
        console.log(data);
      }, err => {
        console.log(err);
      })
    }
  }

}
