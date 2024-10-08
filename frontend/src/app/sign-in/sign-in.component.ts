import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  email='';
  password='';
  errorMessage='';

  constructor(private authService:AuthService, private router:Router){}

  signIn():void{
    this.authService.signIn(this.email,this.password).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/landing']);
      },
      err => {
        this.errorMessage = 'Invalid email or password';
      }
    )
  }

}
