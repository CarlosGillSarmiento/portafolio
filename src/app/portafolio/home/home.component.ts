import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environments';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  baseUrl = environment.mfeBaseRoute;

  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([`/${this.baseUrl}/${path}`]);
  }
}
