import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

const uri = 'http://ase-backend.herokuapp.com';

@Injectable({
  providedIn: 'root'
})



export class FileuploadService {

  constructor(private http: HttpClient) {}


  downloadFile(user, projecttitle) {
    var body = {user, projecttitle};
    console.log(body);
    return this.http.post(uri + '/file/download', body, {
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  movefiles(filename, username, projectname) {
    var body = {filename, username, projectname};
    return this.http.post(uri + '/file/movefile', body, {
      headers: new HttpHeaders().append('content-type', 'application/json')
    });
  }
}
