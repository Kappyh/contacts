import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ContactService } from 'src/app/shared/services/contact.service';
import { Contact } from 'src/app/shared/models/contact';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  public contactForm: Contact = new Contact();

  @Input() set contactForEdit(contact: Contact) {
    Object.assign(this.contactForm, contact);
  };
  @Output() changedList: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private contactService: ContactService) { }


  ngOnInit(): void {
  }

  public saveContact() {
    if (!this.contactForm.id) {
      this.contactService.create(this.contactForm).subscribe(data => {
        this.changedList.emit(true);
        Swal.fire('Sucesso', 'Novo contato criado!', 'success');
      }, err => {
        Swal.fire('Erro', err, 'error');
      })
    } else {
      this.contactService.edit(this.contactForm.id, this.contactForm).subscribe(data => {
        this.changedList.emit(true);
        Swal.fire('Sucesso', 'Contato alterado!', 'success');
      }, err => {
        Swal.fire('Erro', err, 'error');
      })
    }
  }

}
