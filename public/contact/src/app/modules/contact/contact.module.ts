import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContactComponent, MenuBarComponent, ContactsListComponent, ContactFormComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class ContactModule { }
