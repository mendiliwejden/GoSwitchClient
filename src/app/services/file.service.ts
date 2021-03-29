import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';


const FILE_API = 'http://localhost:8081/api';
const SERVER_URL = 'http://localhost:8080/fileUpload/upload';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'multipart/form-data'}),

};

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) {
  }


  getImageById(id: string): Observable<any> {
    return this.http.get(FILE_API + '/getImage' + '/' + id);
  }

  /*  public upload(formData) {
      console.log('upload service function is called');
      console.log(formData);
      return this.http.post<FormData>(SERVER_URL, formData, {
        reportProgress: true,
        observe: 'events'
      });
    }*/

  upload(homeId: number, file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    formData.append('homeId', homeId.toString());
    console.log(file);

    const req = new HttpRequest('POST', `${FILE_API}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFileById(id: string): Observable<any> {
    return this.http.get(FILE_API + '/fileById' + '/' + id, {responseType: 'blob'});
  }

  getFiles(): Observable<any> {
    return this.http.get(FILE_API + '/files', {responseType: 'blob'});
  }

  getFilesAsString(): Observable<any> {
    return this.http.get(FILE_API + '/AllFilesAsString');
  }

}
