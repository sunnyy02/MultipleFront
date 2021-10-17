import { Injectable, Injector } from '@angular/core';
import {
  Router,
  NavigationEnd,
} from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MenuItem } from './menu-item';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menuItems$: BehaviorSubject<MenuItem[]>;

  constructor(
    private router: Router,
    private injector: Injector
  ) {
    this.menuItems$ = new BehaviorSubject<MenuItem[]>([]);
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe({
        next: (event) => {
          this.getMenuItems();
        },
      });
  }

  getMenuItems() {
    this.menuItems$.next([]);
    this.router.config.forEach((route) => {
      const children: any[] = [];
      if (route.loadChildren) {
        (this.router as any).configLoader.load(this.injector, route).subscribe({
          next: (moduleConf: { routes: any[] }) => {
            children.push(
              ...moduleConf.routes.map((childRoute) =>
                childRoute.children.map(
                  (x: { path: string; data: { title: string } }) => ({
                    path: x.path,
                    title: x.data?.title,
                  })
                )
              )
            );
            this.menuItems$.next(
              this.menuItems$.value.concat
                .apply([], [...children])
                .filter((x) => x.title)
            );
          },
        });
      }
    });
  }
}
