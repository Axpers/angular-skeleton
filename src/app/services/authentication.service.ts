import { UserLogin } from './../models/user.model';
import { User } from 'src/app/models/user.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavigationService } from './navigation.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  user = new BehaviorSubject<User>(undefined);

  constructor(private navigationService: NavigationService) {
    if (localStorage.getItem('access_token')) {
      this.user.next({
        id: 1,
        name: localStorage.getItem('access_token'),
      });
    } else {
      this.navigationService.navigateToLogin();
    }
  }

  signout() {
    localStorage.removeItem('access_token');
    this.navigationService.navigateToLogin();
    this.user.next(undefined);
  }

  login(credentials: UserLogin) {
    this.user.next({
      id: 1,
      name: credentials.name,
    });

    localStorage.setItem('access_token', credentials.name);

    this.navigationService.navigateToHome();
  }

  getUser(): BehaviorSubject<User> {
    return this.user;
  }

  isLoggedIn(): boolean {
    return (
      localStorage.getItem('access_token') !== null &&
      localStorage.getItem('access_token') !== undefined
    );
  }
}
