import { UserLogin } from '../../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  hidePassword = true;

  constructor(
    private authService: AuthenticationService,
    private navigationService: NavigationService
  ) {}

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.navigationService.navigateToHome();
    }
  }

  login(): void {
    this.authService.login(this.loginFormGroup.value);
  }
}
