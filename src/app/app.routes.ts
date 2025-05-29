import { Routes } from '@angular/router';
import { LoginComponent } from './pages/not-logged/login/login.component';
import { SignUpComponent } from './pages/not-logged/sign-up/sign-up.component';
import { HomeComponent } from './pages/logged/home/home.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastre-se',
    component: SignUpComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];
