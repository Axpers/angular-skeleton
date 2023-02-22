import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationItem } from '../models/nav-item.model';

@Injectable()
export class NavigationService {
  private navigationItems: NavigationItem[];

  private sidenav: MatSidenav;

  constructor() {
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

  private setNavigationItems(): void {
    this.navigationItems = [
      {
        label: 'Home',
        icon: 'home',
        link: '/',
      },
      {
        label: 'Login',
        icon: 'check',
        link: '/auth/login',
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
