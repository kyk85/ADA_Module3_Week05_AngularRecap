import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(public firebaseAuth: AngularFireAuth, public router: Router) {
    this.user = firebaseAuth.authState;
  }

  loginWithGoogle() {
    return this.firebaseAuth
    .auth
    .signInWithPopup(new firebase.auth.GoogleAuthProvider());
    // .then(value => {
    //   console.log('Login Successful');
    //   this.router.navigateByUrl('/products');
    // })
    // .catch(err => {
    //   console.log('Login Failed');
    // });
  }

  // signUpUser(email: string, password: string) {
  //   this.firebaseAuth
  //   .auth
  //   .createUserWithEmailAndPassword(email, password)
  //   .then(value => {
  //     console.log('User Created!');
  //   })
  //   .catch(err => {
  //     console.log('Signup Failed!');
  //   });
  // }

  logout() {
    return this.firebaseAuth
    .auth
    .signOut();
  }

}
