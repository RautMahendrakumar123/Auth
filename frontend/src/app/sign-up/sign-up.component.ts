import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  name = '';
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  signUp(): void {
    this.authService.signUp(this.name, this.email, this.password).subscribe(
      () => {
        this.router.navigate(['/signin']);
      },
      err => {
        this.errorMessage = 'Failed to sign up';
      }
    );
  }
}
