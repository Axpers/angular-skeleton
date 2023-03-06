import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../@shared/shared.module';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LogoutDialogComponent } from './toolbar/logout-dialog/logout-dialog.component';

import { NavigationService } from '../services/navigation.service';

@NgModule({
  declarations: [
    LayoutComponent,
    ToolbarComponent,
    SidenavComponent,
    LogoutDialogComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  providers: [NavigationService],
  exports: [LayoutComponent],
})
export class LayoutModule {}
