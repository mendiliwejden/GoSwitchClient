import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Home} from '../models/Home';
import {environment} from '../../environments/environment';

const HOME_API = environment.apiBaseUrl + '/home/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'multipart/form-data; boundary=toMyFile'}),

};

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {
  }


  addHome(form: any): Observable<any> {
    return this.http.post(HOME_API + 'addHome', form);
  }

  getHomeById(id: number): Observable<any> {
    return this.http.get(HOME_API + 'getHome' + '/' + id);
  }

  getAllHomeList(): Observable<Home[]> {
    return this.http.get<Home[]>(HOME_API + 'allHome');
  }

  getHomeListByRegion(region: string): Observable<Home[]> {
    return this.http.get<Home[]>(HOME_API + 'HomeListByRegion/' + region);
  }

  updateHomePublished(id: number, state: boolean): Observable<any> {
    return this.http.put(HOME_API + 'updateHomePublished/' + id + '/' + state, {});
  }


  deleteHomeById(id: number): Observable<any> {
    return this.http.delete(HOME_API + 'deleteHome' + '/' + id);
  }

  deleteAllHome(): Observable<any> {
    return this.http.delete(HOME_API + 'deleteAll');
  }

  getAllNotPublishedHome(): Observable<Home[]> {
    return this.http.get<Home[]>(HOME_API + 'notPublished');
  }

  getAllPublishedHome(): Observable<Home[]> {
    return this.http.get<Home[]>(HOME_API + 'AllHomePublished');
  }
}
