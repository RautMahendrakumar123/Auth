import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  user: any;

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/auth/me', {
      headers: { 'x-auth-token': localStorage.getItem('token')! }
    }).subscribe(
      (res: any) => {
        this.user = res;
      },
      err => {
        this.authService.logOut();
      }
    );
  }

  logOut(): void {
    this.authService.logOut();
  }
}
