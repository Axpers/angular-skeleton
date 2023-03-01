import { UserLogin } from './../models/user.model';
import { User } from 'src/app/models/user.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { NavigationService } from './navigation.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private readonly accessTokenKey = 'accessToken';
  private user$ = new BehaviorSubject<User | null>(null);

  constructor(private navigationService: NavigationService) {
    const isAccessTokenDefined =
      localStorage.getItem(this.accessTokenKey) !== null;

    if (isAccessTokenDefined) {
      this.user$.next({
        id: 1,
        name: localStorage.getItem(this.accessTokenKey)!,
      });
    } else {
      this.navigationService.navigateToLogin();
    }
  }

  signout() {
    localStorage.removeItem(this.accessTokenKey);
    this.navigationService.navigateToLogin();
    this.user$.next(null);
  }

  login(credentials: UserLogin) {
    this.user$.next({
      id: 1,
      name: credentials.name,
    });

    localStorage.setItem(this.accessTokenKey, credentials.name);

    this.navigationService.navigateToHome();
  }

  getUser$(): BehaviorSubject<User | null> {
    return this.user$;
  }

  isLoggedIn(): boolean {
    return (
      localStorage.getItem(this.accessTokenKey) !== null &&
      localStorage.getItem(this.accessTokenKey) !== undefined
    );
  }
}
