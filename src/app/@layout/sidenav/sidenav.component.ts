import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/models/nav-item.model';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'layout-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  menus: NavItem[];

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menus = this.menuService.getMenus();
  }
}
