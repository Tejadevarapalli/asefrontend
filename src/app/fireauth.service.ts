import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FireauthService {
  constructor(public auth: AngularFireAuth) {
  }
  fireRegister(v1, v2) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(v1, v2).then(res => {
        resolve(res);
      }, err => reject(err));
    });
  }


  firelogin(v1, v2) {
    return new Promise<any>( (resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(v1, v2).then(res => {
        resolve(res);
      }, err => reject(err));
    });
  }
  firesignout() {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signOut().then(res => {
        resolve(res);
      }, err => reject(err));
    });
  }
}


