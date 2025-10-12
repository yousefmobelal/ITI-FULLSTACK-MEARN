import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;
  login(email: string, password: string) {
    const validEmail = 'test@gmail.com';
    const validPassword = '12345';

    if (email === validEmail && password === validPassword) {
      localStorage.setItem('authenticated', 'true');
      this.isLoggedIn = true;
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('authenticated');
    this.isLoggedIn = false;
  }
}
