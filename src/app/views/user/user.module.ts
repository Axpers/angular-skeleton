import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SharedModule } from 'src/app/@shared/shared.module';

@NgModule({
  declarations: [SigninComponent],
  imports: [CommonModule, UserRoutingModule, SharedModule],
})
export class UserModule {}
