import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AccessTokenResponse,
  UserLoginRequest,
} from '../views/auth/models/auth.model';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  private readonly authEndpoint = 'auth';

  constructor(private readonly httpClient: HttpClient) {}

  async login(credentials: UserLoginRequest): Promise<AccessTokenResponse> {
    const loginEndpoint = 'login';
    const url = `${environment.apiUrl}/${this.authEndpoint}/${loginEndpoint}`;

    return firstValueFrom(
      this.httpClient.post<AccessTokenResponse>(url, credentials)
    );
  }
}
