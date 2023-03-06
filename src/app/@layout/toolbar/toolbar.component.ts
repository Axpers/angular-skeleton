import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';
import { NavigationService } from 'src/app/services/navigation.service';
import { Observable } from 'rxjs';
import { AuthCoreService } from 'src/app/views/auth/services/auth-core.service';

@Component({
  selector: 'layout-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  user: User | null;

  constructor(
    private authService: AuthCoreService,
    private dialog: MatDialog,
    public navigationService: NavigationService
  ) {}

  ngOnInit() {
    this.setUser();
  }

  handleLogout(): void {
    this.dialog.open(LogoutDialogComponent);
  }

  handleSidenavToggle(): void {
    this.navigationService.toggleSidenav();
  }

  private setUser(): void {
    this.authService.getUser$().subscribe((user) => {
      this.user = user;
    });
  }
}
