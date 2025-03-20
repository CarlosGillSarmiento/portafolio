import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'portafolio',
    loadChildren: () =>import("./portafolio/app.routing").then(m => m.routes)
  },
  {
    path: '**',
    redirectTo: 'portafolio',
  }
];
