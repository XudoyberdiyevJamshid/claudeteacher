import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  constructor(private router: Router) {}
  chiqish() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  kirganmi() {
    return localStorage.getItem('user');
  }
}
