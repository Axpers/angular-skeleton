import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationService } from 'src/app/services/navigation.service';
import { UserLoginRequest } from '../models/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormGroup = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
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

  handleLogin(): void {
    if (!this.loginFormGroup.valid) {
      return;
    }
    const credentials: UserLoginRequest = {
      name: this.loginFormGroup.value.name!,
      password: this.loginFormGroup.value.password!,
    };

    this.authService.login(credentials);
  }
}
