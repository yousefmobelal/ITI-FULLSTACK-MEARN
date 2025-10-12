import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Login } from '../login/login';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  authService = inject(AuthService);
  router = inject(Router);
  isLoggedIn: boolean = false;
  setLoginState(state: boolean) {
    this.isLoggedIn = state;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
