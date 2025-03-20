import { Routes } from '@angular/router';
import { HomePageComponent } from '../shared/pages/home-page/home-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'about-me',
    component: AboutMeComponent
  },
  {
    path: 'contact-me',
    component: ContactMeComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }

];

export class AppRouting{}