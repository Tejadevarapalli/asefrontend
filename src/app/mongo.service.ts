import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';
import {until} from 'selenium-webdriver';
import titleContains = until.titleContains;

const uri = 'https://ase-backend.herokuapp.com';

@Injectable({
  providedIn: 'root'
})



export class mongoService {

  constructor(private http: HttpClient) {}
  sendDetails(formdata) {
    console.log('checkpoint', formdata);
    return this.http.post(uri + '/sendDetails', formdata);
   }
  signupDetails(formdata) {
    console.log('checkpoint', formdata);
    return this.http.post(uri + '/signupDetails', formdata);
  }
  signinDetails(formdata) {
    console.log('checkpoint', formdata);
    return this.http.post(uri + '/signinDetails', formdata);
  }
  mymodelDetails(id) {
    let user = { id };
    console.log(user);
    return this.http.post(uri + '/mymodelsDetails', user);
  }

  modelDetails() {
    return this.http.get(uri + '/modelsDetails');
  }
  viewdetails(title) {
   let id = { title};
   return this.http.post(uri + '/viewDetails', id);
  }
  profiledetails(userid) {
    let id = { userid };
    return this.http.post(uri + '/profiledetails', id);
  }

  Likecount( element ) {
    let name = { element};
    return this.http.post(uri + '/Likecount', name);
  }

  Deletemodal( element ) {
    let name = { element};
    return this.http.post(uri + '/Deletemodal', name);
  }

  profiledetail( Email, about ) {
    let id = { Email, about};
    console.log('id tere:', id);
    return this.http.post(uri + '/profileabout', id);
  }
  comment(User, Project, Comment){
    let id ={User, Project, Comment};
    return this.http.post(uri + '/comment',id);
  }
  commentdetails(title) {
    let id= {title};
    return this.http.post(uri + '/commentdetails',id);
  }

}
