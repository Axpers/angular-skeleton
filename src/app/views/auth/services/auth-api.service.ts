import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccessTokenResponse, UserLoginRequest } from '../models/auth.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AuthApiService {
  private readonly authEndpoint = 'auth';

  constructor(private readonly httpClient: HttpClient) {}

  async login(
    credentials: UserLoginRequest
  ): Promise<Observable<AccessTokenResponse>> {
    const loginEndpoint = 'login';
    const url = `${environment.apiUrl}/${this.authEndpoint}/${loginEndpoint}`;

    return this.httpClient.post<AccessTokenResponse>(url, credentials);
  }
}
