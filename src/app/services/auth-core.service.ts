import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { NavigationService } from 'src/app/services/navigation.service';
import { UserLoginRequest } from '../views/auth/models/auth.model';
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

  async login(credentials: UserLoginRequest): Promise<void> {
    localStorage.setItem(this.accessTokenKey, credentials.email);

    try {
      const token = await this.apiService.login(credentials);

      // fetch user with token
      this.user$.next({
        id: 1,
        name: credentials.email,
      });

      this.navigationService.navigateToHome();
    } catch (error) {
      // handle login failed case
      console.log(error);

      // Error message
    }
  }

  getUser$(): BehaviorSubject<User | null> {
    return this.user$;
  }

  isLoggedIn(): boolean {
    return this.user$.value !== null;
  }

  private setUser(): void {
    // Fetch user with token

    this.user$.next({
      id: 1,
      name: localStorage.getItem(this.accessTokenKey)!,
    });
  }
}
