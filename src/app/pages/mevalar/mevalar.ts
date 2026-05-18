import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MevaCard } from '../../meva-card/meva-card';
import { MevaService } from '../../service/meva';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-mevalar',
  imports: [MevaCard, FormsModule],
  templateUrl: './mevalar.html',
  styleUrl: './mevalar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  ochirish(id: string) {
    this.mevaService.ochirish(id);
  }

  savatgaQosh(meva: { id: string; nomi: string; rangi: string; narxi: number }) {
    this.mevaService.savatgaQosh(meva);
  }
}
