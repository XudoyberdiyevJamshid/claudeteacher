import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MevaService {
  mevalar = [
    { nomi: 'Olma', rangi: 'Qizil', narxi: 5000 },
    { nomi: 'Banan', rangi: 'Sariq', narxi: 6000 },
    { nomi: 'Uzum', rangi: 'Binafsha', narxi: 7000 },
    { nomi: 'Nok', rangi: 'Yashil', narxi: 8000 },
  ];

  savat: { nomi: string; rangi: string; narxi: number }[] = [];

  qoshish(meva: { nomi: string; rangi: string; narxi: number }) {
    this.mevalar.push(meva);
  }

  ochirish(index: number) {
    this.mevalar.splice(index, 1);
  }

  savatgaQoshish(meva: { nomi: string; rangi: string; narxi: number }) {
    this.savat.push(meva);
  }
  savatdanOchirish(index: number) {
    this.savat.splice(index, 1);
  }

  get jami() {
    return this.savat.reduce((sum, m) => sum + m.narxi, 0);
  }
}
