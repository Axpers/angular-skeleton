import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';
import { NavigationService } from 'src/app/services/navigation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'layout-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  user$: Observable<User | null>;

  constructor(
    private authService: AuthenticationService,
    private dialog: MatDialog,
    public navigationService: NavigationService
  ) {}

  ngOnInit() {
    this.user$ = this.authService.getUser$();
  }

  logoutDialog() {
    this.dialog.open(LogoutDialogComponent);
  }

  toggleSidenav() {
    this.navigationService.toggleSidenav();
  }
}
