import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {authGuard} from './auth.guard'

const routes: Routes = [
  {path:'',redirectTo:'landing',pathMatch:'full'},
  {path:'signin',component:SignInComponent},
  {path:'signup',component:SignUpComponent},
  {path:'landing',component:LandingPageComponent,canActivate:[authGuard]},
  {path:'**',redirectTo:'/landing'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
