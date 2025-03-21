import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BASE_PATH } from '../../../app.routes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showMenu = false;

  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([`/${BASE_PATH}/${path}`]);
  }

  openMenu() {
    this.showMenu = !this.showMenu;
  }
}
