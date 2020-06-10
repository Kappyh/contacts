import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Contact } from 'src/app/shared/models/contact';
import { ContactService } from 'src/app/shared/services/contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit, OnChanges {

  public _contacts: Array<Contact> = [];

  @Input() set contacts(contacts) {
    if (contacts) {
      this._contacts = contacts;
    }
  }

  constructor(private contactService: ContactService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['contacts']) {
      this._contacts = changes['contacts'].currentValue;
    }
  }

  ngOnInit(): void {
  }

  public removeContact(id: number) {
    this.contactService.delete(id).subscribe(data => {
      console.log(data)
      // remover o contato do array se removido
    }, err => {
      console.log(err);
    })
  }

  public editContact(id: number) { }

}
