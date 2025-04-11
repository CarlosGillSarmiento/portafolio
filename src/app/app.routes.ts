import { Routes } from '@angular/router';
import { environment } from '../environments/environments';

const basePath = environment.mfeBaseRoute;
export const routes: Routes = [
  {
    path: basePath,
    loadChildren: () =>import("./portafolio/app.routing").then(m => m.routes)
  },
  {
    path: '**',
    redirectTo: 'portafolio',
  }
];
