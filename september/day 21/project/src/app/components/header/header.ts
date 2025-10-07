import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Login } from '../login/login';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isLoggedIn: boolean = false;
  setLoginState(state: boolean) {
    this.isLoggedIn = state;
  }
}
