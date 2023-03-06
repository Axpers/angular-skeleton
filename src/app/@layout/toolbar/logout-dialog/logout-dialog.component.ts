import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { AuthCoreService } from 'src/app/services/auth-core.service';

@Component({
  selector: 'app-logout-dialog',
  templateUrl: './logout-dialog.component.html',
  styleUrls: ['./logout-dialog.component.scss'],
})
export class LogoutDialogComponent implements OnInit {
  constructor(
    private authService: AuthCoreService,
    private dialogRef: MatDialogRef<LogoutDialogComponent>
  ) {}

  ngOnInit(): void {}

  handleLogout(): void {
    this.authService.signout();
    this.dialogRef.close();
  }
}
