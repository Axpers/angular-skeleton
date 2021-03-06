import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'layout-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  user: User;

  constructor(
    private authService: AuthenticationService,
    private dialog: MatDialog,
    public navService: NavService
  ) {}

  ngOnInit() {
    this.authService.getUser().subscribe((value) => (this.user = value));
  }

  logoutDialog() {
    this.dialog.open(LogoutDialogComponent);
  }

  toggleSidenav() {
    this.navService.toggleNav();
  }
}
