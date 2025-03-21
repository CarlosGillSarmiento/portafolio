import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BASE_PATH } from '../../app.routes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([`/${BASE_PATH}/${path}`]);
  }
}
