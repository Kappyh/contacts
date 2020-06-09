import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  public list(): Observable<Array<Contact>> {
    const url = `${environment.api}/contact`;
    return this.http.get<Array<Contact>>(url);
  };

  public create(contact: Contact): Observable<Contact> {
    const url = `${environment.api}/contact`;
    return this.http.post<Contact>(url, contact);
  }

  public edit(id: number, contact: Contact): Observable<Contact> {
    const url = `${environment.api}/contact/${id}`;
    return this.http.post<Contact>(url, contact);
  }

  public delete(id: number): Observable<any> {
    const url = `${environment.api}/contact/${id}`;
    return this.http.delete<any>(url);
  }
}
