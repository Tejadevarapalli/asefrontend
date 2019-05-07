import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';
import {until} from 'selenium-webdriver';
import titleContains = until.titleContains;


@Injectable({
  providedIn: 'root'
})
export class mongoService {

  constructor(private http: HttpClient) {}

  sendDetails(formdata) {
    console.log('checkpoint', formdata);
    return this.http.post('http://localhost:3000/sendDetails', formdata);
   }
  signupDetails(formdata) {
    console.log('checkpoint', formdata);
    return this.http.post('http://localhost:3000/signupDetails', formdata);
  }
  signinDetails(formdata) {
    console.log('checkpoint', formdata);
    return this.http.post('http://localhost:3000/signinDetails', formdata);
  }
  mymodelDetails(id) {
    let user = { id };
    console.log(user);
    return this.http.post('http://localhost:3000/mymodelsDetails', user);
  }

  modelDetails() {
    return this.http.get('http://localhost:3000/modelsDetails');
  }
  viewdetails(title) {
   let id = { title};
   return this.http.post('http://localhost:3000/viewDetails', id);
  }
  profiledetails(userid) {
    let id = { userid };
    return this.http.post('http://localhost:3000/profiledetails', id);
  }

  Likecount( element ) {
    let name = { element};
    return this.http.post('http://localhost:3000/Likecount', name);
  }

  Deletemodal( element ) {
    let name = { element};
    return this.http.post('http://localhost:3000/Deletemodal', name);
  }

  profiledetail( Email, about ) {
    let id = { Email, about};
    console.log('id tere:', id);
    return this.http.post('http://localhost:3000/profileabout', id);
  }
  comment(User, Project, Comment){
    let id ={User, Project, Comment};
    return this.http.post('http://localhost:3000/comment',id);
  }
  commentdetails(title) {
    let id= {title};
    return this.http.post('http://localhost:3000/commentdetails',id);
  }

}
