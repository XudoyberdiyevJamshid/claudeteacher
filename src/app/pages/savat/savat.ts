import { Component } from '@angular/core';
import { MevaService } from '../../service/meva';

@Component({
  selector: 'app-savat',
  imports: [],
  templateUrl: './savat.html',
  styleUrl: './savat.css',
})
export class Savat {
  constructor(public mevaservice: MevaService) {}

  ochirish(index: number) {
    this.mevaservice.savatdanOchir(index);
  }
}
