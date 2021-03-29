import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Message} from '../models/Message';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),

};

const API_URL = 'http://localhost:8081/api/contact/';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendMail(message: Message): Observable<any> {
    return this.http.post(API_URL + 'sendMessage', message, httpOptions);
  }
}
