import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { UserLoginRequest } from '../views/auth/models/auth.model';
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

  login(credentials: UserLoginRequest) {
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
