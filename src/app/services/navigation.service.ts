import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

export interface NavigationItem {
  label: string;
  icon?: string;
  link?: string;
}

@Injectable()
export class NavigationService {
  private navigationItems: NavigationItem[];
  private sidenav: MatSidenav;
  private homeUrl = '';
  private loginUrl = 'auth/login';

  constructor(private router: Router) {
    this.setNavigationItems();
  }

  closeSidenav() {
    this.sidenav.close();
  }

  openSidenav() {
    this.sidenav.open();
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  setSidenav(sidenav: MatSidenav): void {
    this.sidenav = sidenav;
  }

  getNavigationItems() {
    return this.navigationItems;
  }

  navigateToLogin(): void {
    this.router.navigateByUrl(this.loginUrl);
  }

  navigateToHome(): void {
    this.router.navigateByUrl(this.homeUrl);
  }

  private setNavigationItems(): void {
    this.navigationItems = [
      {
        label: 'Home',
        icon: 'home',
        link: `/${this.homeUrl}`,
      },
      {
        label: 'Login',
        icon: 'check',
        link: `/${this.loginUrl}`,
      },
      {
        label: 'Menu 2',
        icon: 'check',
        link: '/',
      },
      {
        label: 'Menu 3',
        icon: 'check',
        link: '/',
      },
    ];
  }
}
