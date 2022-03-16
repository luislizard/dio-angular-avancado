import { APP_ROUTES } from './../app.routes';
import { Routes } from '@angular/router';
import { Microfrontend } from './../microfrontend/microfrontend.model';
import { loadRemoteModule } from './federation-utils';

export function buildRoutes(options: Microfrontend[]): Routes {
  const lazyRoutes: Routes = options.map((o) => ({
    path: o.routePath,
    loadChildren: () => loadRemoteModule<any>(o).then((m) => m[o.ngModuleName]),
  }));

  return [...APP_ROUTES, ...lazyRoutes];
}
