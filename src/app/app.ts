import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { MevaCard } from './meva-card/meva-card';
import { MevaService } from './meva';

@Component({
  selector: 'app-root',
  imports: [FormsModule, MevaCard, RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(public mevaService: MevaService) {}
  tanlangan_meva = '';

  yangi_nomi = '';
  yangi_rangi = '';
  yangi_narxi = 0;

  mevalarnarxi = 0;

  qoshish() {
    if (this.yangi_nomi !== '' && this.yangi_rangi !== '') {
      this.mevaService.qoshish({
        nomi: this.yangi_nomi,
        rangi: this.yangi_rangi,
        narxi: this.yangi_narxi,
      });
      this.yangi_nomi = '';
      this.yangi_rangi = '';
      this.yangi_narxi = 0;
    }
  }

  savatgaQoshamiz(narx: number) {
    this.mevalarnarxi += narx;
  }

  ochiramiz(index: number) {
    this.mevaService.ochirish(index);
  }
}
