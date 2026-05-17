import { Component } from '@angular/core';
import { MevaCard } from '../../meva-card/meva-card';
import { MevaService } from '../../service/meva';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-mevalar',
  imports: [MevaCard, FormsModule],
  templateUrl: './mevalar.html',
  styleUrl: './mevalar.css',
})
export class Mevalar {
  yangi_nomi = '';
  yangi_rangi = '';
  yangi_narxi = 0;

  constructor(public mevaService: MevaService) {}

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

  ochirish(index: number) {
    this.mevaService.ochirish(index);
  }
  savatgaQoshish(meva: { nomi: string; rangi: string; narxi: number }) {
    this.mevaService.savatgaQoshish(meva);
  }
}
