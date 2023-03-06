import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { NavigationService } from '../services/navigation.service';
import { AuthCoreService } from '../views/auth/services/auth-core.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  isLoggedIn: boolean;

  constructor(
    private authService: AuthCoreService,
    private navigationService: NavigationService
  ) {}

  ngOnInit() {
    this.setIsLoggedIn();
  }

  private setIsLoggedIn(): void {
    this.authService.getUser$().subscribe((user) => {
      this.isLoggedIn = user !== null;
      this.setSidenav();
    });
  }

  private setSidenav(): void {
    setTimeout(() => {
      this.navigationService.setSidenav(this.sidenav);
    }, 1);
  }
}
