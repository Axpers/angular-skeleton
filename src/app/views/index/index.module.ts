import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/@shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, IndexRoutingModule, SharedModule],
})
export class IndexModule {}
