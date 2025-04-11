import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environments/environments';
import { routes } from '../../../portafolio/app.routing';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  showMenu = false;
  baseUrl = environment.mfeBaseRoute;
  routes = routes;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.checkScreenSize();
  }

  navigate(path: string) {
    this.router.navigate([`/${this.baseUrl}/${path}`]);
    this.showMenu = false;
    this.checkScreenSize();
  }

  openMenu() {
    this.showMenu = !this.showMenu;
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    if (typeof window !== 'undefined') {
      this.showMenu = window.innerWidth >= 768;
    }
  }
}
