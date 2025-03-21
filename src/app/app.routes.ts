import { Routes } from '@angular/router';
export const BASE_PATH = 'portafolio';
export const routes: Routes = [
  {
    path: BASE_PATH,
    loadChildren: () =>import("./portafolio/app.routing").then(m => m.routes)
  },
  {
    path: '**',
    redirectTo: 'portafolio',
  }
];
