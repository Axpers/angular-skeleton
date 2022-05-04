import { Injectable } from '@angular/core';
import { NavItem } from '../models/nav-item.model';

@Injectable()
export class MenuService {
  private menus: NavItem[] = [
    {
      label: 'Home',
      icon: 'home',
      link: '/',
    },
    {
      label: 'Signin',
      icon: 'check',
      link: '/user/signin',
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

  getMenus() {
    return this.menus;
  }
}
