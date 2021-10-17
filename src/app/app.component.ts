import { Component } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'multiple front app';
  menus$ = this.menuService.menuItems$;
  constructor(private menuService: MenuService) {

  }
}
