import { Routes } from '@angular/router';
import { BoshSahifa } from './pages/bosh-sahifa/bosh-sahifa';
import { Mevalar } from './pages/mevalar/mevalar';
import { Savat } from './pages/savat/savat';
import { MevaForma } from './pages/meva-forma/meva-forma';

export const routes: Routes = [
  {
    path: '',
    component: BoshSahifa,
  },
  {
    path: 'mevalar',
    component: Mevalar,
  },
  {
    path: 'savat',
    component: Savat,
  },
  { path: 'meva-forma', component: MevaForma },
];
