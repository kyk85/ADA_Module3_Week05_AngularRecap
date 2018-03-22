import { Injectable } from '@angular/core';
import { Product } from '../app/product';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { User } from './user';

@Injectable()
export class UserService {

  private usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(private afs: AngularFirestore) {
    this.usersCollection = afs.collection<User>('users');
    this.users = this.usersCollection.valueChanges();
  }

  addUser(user) {
    this.afs.collection('users', ref => ref.where('email', '==', user.email)).
    valueChanges().subscribe((items) => {
      console.log(items);
      if (items.length === 0) {
        this.usersCollection.add(user);
      }
    });
  }
}
