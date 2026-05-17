import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';

export interface Meva {
  id: string;
  nomi: string;
  rangi: string;
  narxi: number;
}

@Injectable({
  providedIn: 'root',
})
export class MevaService {
  private url = 'http://localhost:3000/mevalar';

  mevalar = signal<Meva[]>([]);
  savat = signal<Meva[]>([]);

  jami = computed(() => this.savat().reduce((sum, m) => sum + m.narxi, 0));

  constructor(private http: HttpClient) {
    this.hammamevalarni_ol();
  }

  hammamevalarni_ol() {
    this.http.get<Meva[]>(this.url).subscribe((data) => {
      this.mevalar.set(data);
    });
  }

  qoshish(meva: Omit<Meva, 'id'>) {
    this.http.post<Meva>(this.url, meva).subscribe((yangi) => {
      this.mevalar.update((m) => [...m, yangi]);
    });
  }

  ochirish(id: string) {
    this.http.delete(`${this.url}/${id}`).subscribe(() => {
      this.mevalar.update((m) => m.filter((meva) => meva.id !== id));
    });
  }

  savatgaQosh(meva: Meva) {
    this.savat.update((s) => [...s, meva]);
  }

  savatdanOchir(index: number) {
    this.savat.update((s) => s.filter((_, i) => i !== index));
  }
}
