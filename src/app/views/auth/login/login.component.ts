import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormGroup = new UntypedFormGroup({
    name: new UntypedFormControl('', Validators.required),
    password: new UntypedFormControl('', Validators.required),
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
    this.authService.login(this.loginFormGroup.value);
  }
}
