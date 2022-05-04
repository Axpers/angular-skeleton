import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient, private router: Router) {}

  signout() {
    // localStorage.removeItem('access_token');
    this.router.navigateByUrl('user/signin');
  }

  isLoggedIn() {
    return true;
  }
}
