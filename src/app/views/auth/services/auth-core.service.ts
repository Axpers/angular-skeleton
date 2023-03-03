import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { NavigationService } from 'src/app/services/navigation.service';
import { UserLoginRequest } from '../models/auth.model';
import { AuthApiService } from './auth-api.service';

@Injectable({ providedIn: 'root' })
export class AuthCoreService {
  private readonly accessTokenKey = 'accessToken';
  private user$ = new BehaviorSubject<User | null>(null);

  constructor(
    private readonly navigationService: NavigationService,
    private readonly apiService: AuthApiService
  ) {
    const isAccessTokenDefined =
      localStorage.getItem(this.accessTokenKey) !== null;

    if (isAccessTokenDefined) {
      this.setUser();
    } else {
      this.navigationService.navigateToLogin();
    }
  }

  signout() {
    localStorage.removeItem(this.accessTokenKey);
    this.navigationService.navigateToLogin();
    this.user$.next(null);
  }

  async login(credentials: UserLoginRequest) {
    this.user$.next({
      id: 1,
      name: credentials.name,
    });

    localStorage.setItem(this.accessTokenKey, credentials.name);

    const token = await this.apiService.login(credentials);
    console.log(token);

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

  private setUser() {
    this.user$.next({
      id: 1,
      name: localStorage.getItem(this.accessTokenKey)!,
    });
  }
}
