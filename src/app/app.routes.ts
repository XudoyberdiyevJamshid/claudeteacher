import { Routes } from '@angular/router';
import { BoshSahifa } from './pages/bosh-sahifa/bosh-sahifa';
import { Mevalar } from './pages/mevalar/mevalar';
import { Savat } from './pages/savat/savat';
import { MevaForma } from './pages/meva-forma/meva-forma';
import { authGuard } from './guards/auth-guard';
import { Login } from './pages/login/login';

export const routes: Routes = [
  {
    path: '',

    loadComponent: () => import('./pages/bosh-sahifa/bosh-sahifa').then((m) => m.BoshSahifa),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then((m) => m.Login),
  },
  {
    path: 'mevalar',
    loadComponent: () => import('./pages/mevalar/mevalar').then((m) => m.Mevalar),
  },
  {
    path: 'savat',

    loadComponent: () => import('./pages/savat/savat').then((m) => m.Savat),
  },
  {
    path: 'meva-forma',
    loadComponent: () => import('./pages/meva-forma/meva-forma').then((m) => m.MevaForma),
    canActivate: [authGuard],
  },
];
