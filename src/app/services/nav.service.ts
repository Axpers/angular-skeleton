import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable()
export class NavigationService {
  public sidenav: MatSidenav;

  constructor() {}

  public closeNav() {
    this.sidenav.close();
  }

  public openNav() {
    this.sidenav.open();
  }

  public toggleNav() {
    this.sidenav.toggle();
  }
}
