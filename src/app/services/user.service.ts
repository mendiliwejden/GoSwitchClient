import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const API_URL = environment.apiBaseUrl + '/users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', {responseType: 'text'});
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', {responseType: 'text'});
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', {responseType: 'text'});
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', {responseType: 'text'});
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(API_URL + 'userById/' + id);
  }
  deleteUserById(id: number): Observable<any> {
    return this.http.delete(API_URL + 'deleteById/' + id);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(API_URL + 'allUsers');
  }

  updateUserRoles(userId: number, admin: boolean): Observable<any> {
    return this.http.get(API_URL + 'updateRoles/' + userId + '/' + admin);
  }
}
