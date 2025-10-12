import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  isValidCredentails: boolean = true;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  router = inject(Router);
  authService = inject(AuthService);

  login() {
    if (!this.email || !this.password) return;
    this.isValidCredentails = this.authService.login(this.email, this.password);
    if (this.isValidCredentails) {
      this.router.navigate(['/']);
    }
  }

  get email() {
    return this.loginForm.get('email')?.value;
  }

  get password() {
    return this.loginForm.get('password')?.value;
  }

  isEmailEmpty() {
    return this.loginForm.get('email')?.value?.length == 0;
  }

  isPasswordEmpty() {
    return this.loginForm.get('password')?.value?.length == 0;
  }

  isRequired(controlName: string): boolean {
    const control = this.loginForm.get(controlName);
    return control?.hasError('required') ?? false;
  }

  invalidEmail(): boolean {
    const control = this.loginForm.get('email');
    return control?.hasError('email') ?? false;
  }
}
