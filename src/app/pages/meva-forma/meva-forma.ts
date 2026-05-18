import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MevaService } from '../../service/meva';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meva-forma',
  imports: [ReactiveFormsModule],
  templateUrl: './meva-forma.html',
  styleUrl: './meva-forma.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MevaForma {
  forma: FormGroup;
  constructor(
    private fb: FormBuilder,
    private mevaService: MevaService,
    private router: Router,
  ) {
    this.forma = this.fb.group({
      nomi: ['', Validators.required],
      rangi: ['', Validators.required],
      narxi: [0, [Validators.required, Validators.min(1)]],
    });
  }

  saqlash() {
    if (this.forma.valid) {
      this.mevaService.qoshish(this.forma.value);
      this.router.navigate(['/mevalar']);
    }
  }
}
