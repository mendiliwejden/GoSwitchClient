import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


const FILE_API = 'http://localhost:8081/api/';
const SERVER_URL = 'http://localhost:8080/fileUpload/upload';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'multipart/form-data; boundary=toMyFile'}),

};
@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  getFileById(id: string): Observable<any> {
    return this.http.get(FILE_API + 'files' + '/' + id, httpOptions);
  }

  getImageById(id: string): Observable<any> {
    return this.http.get(FILE_API + 'getImage' + '/' + id, httpOptions);
  }

  public upload(formData) {
    console.log('upload service function is called')
    console.log(formData)
    return this.http.post<FormData>(SERVER_URL, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

}
