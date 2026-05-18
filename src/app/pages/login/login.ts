import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  login = '';
  parol = '';

  constructor(private router: Router) {}

  kirish() {
    if (this.login === 'admin' && this.parol === '1234') {
      localStorage.setItem('user', 'admin');
      this.router.navigate(['/mevalar']);
    } else {
      alert("Login yoki parol noto'g'ri!");
    }
  }
}
