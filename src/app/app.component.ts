import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  template: `<app-layout></app-layout>`,
})
export class AppComponent implements OnInit {
  title = '`Title test ';

  isLoggedIn: boolean;

  constructor(auth: AuthenticationService) {
    this.isLoggedIn = auth.isLoggedIn();
  }

  ngOnInit() {}
}
