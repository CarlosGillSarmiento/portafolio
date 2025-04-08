import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactMeResponse } from '../../shared/interfaces/contactMe.interface';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ContactMeService {
  
  private apiUrl = environment.apiServer;

  constructor(private http: HttpClient) { }

  addUser(value: any): Observable<ContactMeResponse> {
    return this.http.post<ContactMeResponse>(`${this.apiUrl}/contact`, value);
  }
}
