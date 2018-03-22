import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';

import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(public authService: AuthService,
              public router: Router,
              public userService: UserService,
              public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  // signUpUser() {
  //   this.authService.signUpUser(this.email, this.password);
  //   this.email = this.password = '';
  // }

  loginWithGoogle() {
    this.authService.loginWithGoogle().then(() => {
    this.authService.firebaseAuth.authState.subscribe((data) => {
      // console.log(data.email);
      const newuser: User = {
        name: data.displayName,
        email: data.email,
        address: ''
      };
      this.userService.addUser(newuser);
    });
    // this.userService.addUser(data);
    this.router.navigateByUrl('/products');
    // this.email = this.password = '';
    });
  }

  logout() {
    this.authService.logout();
  }

}
