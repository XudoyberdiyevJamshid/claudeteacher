import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-meva-card',
  imports: [],
  templateUrl: './meva-card.html',
  styleUrl: './meva-card.css',
})
export class MevaCard {
  @Input() nomi = '';
  @Input() narxi = 0;
  @Input() rangi = '';
  @Output() savatgaqoshildi = new EventEmitter<number>();
  @Output() tanland = new EventEmitter<string>();
  @Output() ochirildi = new EventEmitter<number>();

  tanlash() {
    this.tanland.emit(this.nomi);
  }
  savatgaqoshish() {
    this.savatgaqoshildi.emit(this.narxi);
  }
  ochirish() {
    this.ochirildi.emit();
  }
}
