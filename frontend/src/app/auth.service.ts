import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8000/api/auth'

  constructor(private http:HttpClient, private router:Router) { }

  signUp(name: string, email: string, password: string):Observable<any>{
    return this.http.post(`${this.apiUrl}/signup`,{name,email,password})
  }

  signIn(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/signin`, { email, password });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logOut(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }
}
