import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Contact } from 'src/app/shared/models/contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit,OnChanges {

  public _contacts:Array<Contact> = [];

  @Input() set contacts(contacts){
    if(contacts){
      this._contacts = contacts;
    }
  }

  constructor() { }

  ngOnChanges(changes:SimpleChanges): void {
    if(changes['contacts']){
      this._contacts = changes['contacts'].currentValue;
    }
  }

  ngOnInit(): void {
  }

}
