import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { NavigationService } from '../services/navigation.service';
import { AuthCoreService } from '../views/auth/services/auth-core.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  isLoggedIn$: Observable<boolean>;

  constructor(
    private authService: AuthCoreService,
    private navigationService: NavigationService
  ) {}

  ngOnInit() {
    this.setIsLoggedIn();
  }

  private setIsLoggedIn(): void {
    this.isLoggedIn$ = this.authService.getUser$().pipe(
      map((user) => user !== null),
      tap(() => this.setSidenav())
    );
  }

  private setSidenav(): void {
    setTimeout(() => {
      this.navigationService.setSidenav(this.sidenav);
    }, 1);
  }
}
