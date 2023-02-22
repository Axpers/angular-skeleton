import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { AuthenticationService } from '../services/authentication.service';
import { NavigationService } from '../services/nav.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  isLoggedIn: boolean;

  constructor(
    private authService: AuthenticationService,
    private navigationService: NavigationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.getUser().subscribe((user) => {
      this.isLoggedIn = user !== undefined;
    });
  }

  ngAfterViewInit() {
    this.navigationService.sidenav = this.sidenav;
  }
}
