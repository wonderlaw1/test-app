import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from 'store';
import { tap } from 'rxjs/operators';
import {auth} from 'firebase';

export interface User {
  email: string;
  uid: string;
  authenticated;
}

@Injectable()
export class AuthService {

  auth$ = this.af.authState.pipe(
    tap(next => this.onAuth(next))
  );

  constructor(private store: Store,
              private af: AngularFireAuth) {
  }

  createUser(email: string, password: string) {
    return this.af.auth.createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string) {
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }

  loginGoogleUser() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  logoutUser() {
    return this.af.auth.signOut();
  }

  get authState() {
    return this.af.authState;
  }

  get user() {
    return this.af.auth.currentUser;
  }

  private onAuth = (next: firebase.User): void => {
    if (!next) {
      this.store.set('user', null);
      return;
    }
    const user: User = {
      email: next.email,
      uid: next.uid,
      authenticated: true
    };
    this.store.set('user', user);
  }

  private AuthLogin(provider) {
    return this.af.auth.signInWithPopup(provider)
      .then(() => {
        console.log('You have been successfully logged in!');
      }).catch((error) => {
        console.log(error);
      });
  }
}
