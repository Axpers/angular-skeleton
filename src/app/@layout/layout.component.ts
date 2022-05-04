import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';

import { AuthenticationService } from '../services/authentication.service';
import { NavService } from '../services/nav.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  sideNavOpened: boolean = true;
  sideNavMode: MatDrawerMode = 'side';
  @ViewChild('sidenav') sidenav: MatSidenav;

  isLoggedIn: boolean;

  constructor(auth: AuthenticationService, private navService: NavService) {
    this.isLoggedIn = auth.isLoggedIn();
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.navService.sidenav = this.sidenav;
  }
}
