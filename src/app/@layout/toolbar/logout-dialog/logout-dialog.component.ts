import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-logout-dialog',
  templateUrl: './logout-dialog.component.html',
  styleUrls: ['./logout-dialog.component.scss'],
})
export class LogoutDialogComponent implements OnInit {
  constructor(
    private auth: AuthenticationService,
    private dialogRef: MatDialogRef<LogoutDialogComponent>
  ) {}

  ngOnInit(): void {}

  handleLogout(): void {
    this.auth.signout();
    this.dialogRef.close();
  }
}
