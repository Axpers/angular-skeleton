import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable()
export class NavService {
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
