import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit() {
    // if (this.auth.isLoggedIn()) {
    //   this.router.navigate(['/']);
    // }
  }
}
