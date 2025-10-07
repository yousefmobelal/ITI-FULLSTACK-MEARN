import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Classes } from './components/classes/classes';
import { About } from './components/about/about';
import { Login } from './components/login/login';
import { authGuard } from './guards/auth-guard';
import { Javascript } from './components/classes/children/javascript/javascript';
import { React } from './components/classes/children/react/react';
import { Nodejs } from './components/classes/children/nodejs/nodejs';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', canActivate: [authGuard], component: Home },
  {
    path: 'classes',
    component: Classes,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'javascript', pathMatch: 'full' },
      { path: 'javascript', component: Javascript },
      { path: 'react', component: React },
      { path: 'nodejs', component: Nodejs },
    ],
  },
  { path: 'about', canActivate: [authGuard], component: About },
  { path: 'login', component: Login },
];
