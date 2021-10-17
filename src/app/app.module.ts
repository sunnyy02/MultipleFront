import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { routes } from './routes';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: loadRoutes,
      deps: [Injector],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function loadRoutes(injector: Injector) {
  return () => {
      const moduleId = environment.moduleId;
      const filteredRoutes = routes.filter((r) => {
        return (
          r.data?.modules.find((r: string) => r === 'all') ||
          r.data?.modules.find((r: string) => r === moduleId)
        );
      });
      const router: Router = injector.get(Router);
      router.resetConfig(filteredRoutes);
    };
}
