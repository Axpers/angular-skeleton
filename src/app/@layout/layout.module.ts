import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../@shared/shared.module';

import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LogoutDialogComponent } from './toolbar/logout-dialog/logout-dialog.component';

import { NavService } from '../services/nav.service';
import { MenuService } from '../services/menu.service';

@NgModule({
  declarations: [
    LayoutComponent,
    ToolbarComponent,
    SidenavComponent,
    LogoutDialogComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [LayoutComponent],
  providers: [NavService, MenuService],
})
export class LayoutModule {}
