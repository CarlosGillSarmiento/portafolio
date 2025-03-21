import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BASE_PATH } from '../../../app.routes';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([`/${BASE_PATH}/${path}`]);
  }
}
