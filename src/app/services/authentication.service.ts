import { UserLogin } from './../models/user.model';
import { User } from 'src/app/models/user.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NavigationService } from './navigation.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private readonly accessToken = 'accessToken';
  private user$ = new Observable<User | null>();

  constructor(private navigationService: NavigationService) {
    const isAccessTokenDefined =
      localStorage.getItem(this.accessToken) !== undefined;

    if (isAccessTokenDefined) {
      this.user$ = of({
        id: 1,
        name: localStorage.getItem(this.accessToken)!,
      });
    } else {
      this.navigationService.navigateToLogin();
    }
  }

  signout() {
    localStorage.removeItem(this.accessToken);
    this.navigationService.navigateToLogin();
    this.user$ = of(null);
  }

  login(credentials: UserLogin) {
    this.user$ = of({
      id: 1,
      name: credentials.name,
    });

    localStorage.setItem(this.accessToken, credentials.name);

    this.navigationService.navigateToHome();
  }

  getUser$(): Observable<User | null> {
    return this.user$;
  }

  isLoggedIn(): boolean {
    return (
      localStorage.getItem(this.accessToken) !== null &&
      localStorage.getItem(this.accessToken) !== undefined
    );
  }
}
