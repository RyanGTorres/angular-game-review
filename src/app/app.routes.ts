import { Routes } from '@angular/router';
import { LoginComponent } from './pages/not-logged/login/login.component';
import { SignUpComponent } from './pages/not-logged/sign-up/sign-up.component';
import { HomeComponent } from './pages/logged/home/home.component';
import { CreateGameComponent } from './pages/logged/create-game/create-game.component';

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
    path: 'criar-jogo',
    component: CreateGameComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];
