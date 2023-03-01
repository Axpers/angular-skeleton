import { AuthenticationService } from 'src/app/services/authentication.service';
import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { NavigationService } from '../services/navigation.service';

export function authGuard(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): CanActivateFn {
  const authService = inject(AuthenticationService);
  const navigationService = inject(NavigationService);

  return () => {
    if (authService.isLoggedIn()) {
      return true;
    } else {
      navigationService.navigateToLogin();
      return false;
    }
  };
}
