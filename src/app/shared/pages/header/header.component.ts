import { Component, HostListener, OnInit } from '@angular/core';
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
export class HeaderComponent implements OnInit {
  showMenu = false;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.checkScreenSize();
  }

  navigate(path: string) {
    this.router.navigate([`/${BASE_PATH}/${path}`]);
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
