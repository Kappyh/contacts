import { Component, OnInit } from '@angular/core';
import { faAddressBook,faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  public faAddressBookIcon;
  public faPlusIcon;

  constructor() { }

  ngOnInit(): void {
    this.faAddressBookIcon = faAddressBook;
    this.faPlusIcon = faPlus;
  }

}
