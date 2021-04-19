import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Message} from '../models/Message';
import {environment} from '../../environments/environment';

const API_URL = environment.apiBaseUrl + '/contact/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),

};

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendMail(message: Message): Observable<any> {
    return this.http.post(API_URL + 'sendMessage', message, httpOptions);
  }
}
