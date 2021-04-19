import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ExchangeRequest} from '../models/ExchangeRequest';
import {environment} from '../../environments/environment';

const REQ_API = environment.apiBaseUrl + '/homeExchange/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),

};

@Injectable({
  providedIn: 'root'
})
export class ExchangeRequestService {

  constructor(private http: HttpClient) { }

  addExchangeRequest(exchangeRequest: ExchangeRequest): Observable<ExchangeRequest> {
    return this.http.post<ExchangeRequest>(REQ_API + 'addRequest', exchangeRequest);
  }

  getAllExchangeRequest(): Observable<ExchangeRequest[]> {
    return this.http.get<ExchangeRequest[]>(REQ_API + 'allRequest');
  }

  getExchangeRequestById(id: number): Observable<ExchangeRequest[]> {
    return this.http.get<ExchangeRequest[]>(REQ_API + 'getRequest/' + id);
  }

  deleteExchangeRequestById(id: number): Observable<any> {
    return this.http.delete(REQ_API + 'deleteRequest' + '/' + id);
  }

  updateExchangeRequest(id: number, exchangeRequest: ExchangeRequest): Observable<any> {
    return this.http.put(REQ_API + 'updateExchange' + '/' + id, exchangeRequest);
  }

  deleteAllExchangeRequest(): Observable<any> {
    return this.http.delete(REQ_API + 'deleteAllRequest');
  }
}
