import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faAddressBook, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  public faAddressBookIcon;
  public faPlusIcon;

  @Output() showForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.faAddressBookIcon = faAddressBook;
    this.faPlusIcon = faPlus;
  }

  public addContact() {
    this.showForm.emit(true);
  }

}
