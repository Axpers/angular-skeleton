import { UserSignin } from './../models/user.model';
import { User } from 'src/app/models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  user = new BehaviorSubject<User>(undefined);

  constructor(private http: HttpClient, private router: Router) {
    if (localStorage.getItem('access_token')) {
      this.user.next({
        id: 1,
        name: localStorage.getItem('access_token'),
      });
    } else {
      this.router.navigateByUrl('user/signin');
    }
    this.user.subscribe((value) => console.log(value));
  }

  signout() {
    localStorage.removeItem('access_token');
    this.router.navigateByUrl('user/signin');
    this.user.next(undefined);
  }

  login(credentials: UserSignin) {
    this.user.next({
      id: 1,
      name: credentials.name,
    });

    localStorage.setItem('access_token', credentials.name);

    this.router.navigateByUrl('/');
  }

  getUser(): BehaviorSubject<User> {
    return this.user;
  }

  isLoggedIn(): boolean {
    const result = localStorage.getItem('access_token') !== null;
    console.log(result);
    return result;
  }
}
