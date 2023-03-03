import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { SharedModule } from 'src/app/@shared/shared.module';
import { LoginComponent } from './login/login.component';
import { AuthApiService } from './services/auth-api.service';
import { AuthCoreService } from './services/auth-core.service';

@NgModule({
  declarations: [LoginComponent],
  providers: [AuthApiService, AuthCoreService],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
