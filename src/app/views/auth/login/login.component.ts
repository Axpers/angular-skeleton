import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationService } from 'src/app/services/navigation.service';
import { UserLoginRequest } from '../models/auth.model';
import { AuthCoreService } from '../../../services/auth-core.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormGroup = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  hidePassword = true;

  constructor(
    private readonly authService: AuthCoreService,
    private readonly navigationService: NavigationService
  ) {}

  ngOnInit() {
    this.navigateHomeIfUserAlreadyLoggedIn();
  }

  handleLogin(): void {
    if (!this.loginFormGroup.valid) {
      return;
    }
    const credentials: UserLoginRequest = {
      email: this.loginFormGroup.value.email!,
      password: this.loginFormGroup.value.password!,
    };

    this.authService.login(credentials);
  }

  private navigateHomeIfUserAlreadyLoggedIn() {
    if (this.authService.isLoggedIn()) {
      this.navigationService.navigateToHome();
    }
  }
}
