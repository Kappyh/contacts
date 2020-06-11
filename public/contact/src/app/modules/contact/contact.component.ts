import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/shared/models/contact';
import { ContactService } from 'src/app/shared/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  public contacts: Array<Contact> = [];
  public fillForm: boolean = false;
  public contactForEdit: Contact = new Contact();

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.listContacts();
  }

  private listContacts() {
    this.contactService.list().subscribe(data => {
      this.contacts = data;
    }, err => {
      return Swal.fire('Error!', err, 'error');
    })
  }

  public showForm(state: boolean) {
    this.fillForm = state;
  }

  public refreshList(isChanged: boolean) {
    if (isChanged) {
      this.listContacts();
      this.fillForm = false;
    }
  }

  public editContact(contact: Contact) {
    this.contactForEdit = contact;
    this.fillForm = true;
  }
}
