import { Component, OnInit } from '@angular/core';
import { NavigationItem } from 'src/app/models/nav-item.model';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'layout-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  navigationItems: NavigationItem[];

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.navigationItems = this.navigationService.getNavigationItems();
  }
}
