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
    component: BoshSahifa,
  },
  { path: 'login', component: Login },
  {
    path: 'mevalar',
    component: Mevalar,
  },
  {
    path: 'savat',
    component: Savat,
  },
  { path: 'meva-forma', component: MevaForma, canActivate: [authGuard] },
];
