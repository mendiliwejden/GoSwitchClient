import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Home} from '../models/Home';


const HOME_API = 'http://localhost:8081/api/home/';
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

  updateHomePublished(id: number): Observable<any> {
    return this.http.post(HOME_API + 'updateHomePublished', id);
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

  getHomeListByRegion(region: string): Observable<Home[]> {
  return this.http.get<Home[]>(HOME_API + 'HomeListByRegion/' + region);
}
}
