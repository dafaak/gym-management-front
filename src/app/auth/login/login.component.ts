import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ThemeService } from '../../core/services/theme.service';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    NgOptimizedImage
  ],
  templateUrl: './login.component.html',
  standalone: true,
  providers: [AuthService],
  styleUrl: './login.component.css'
})
export class LoginComponent {

  hide = true;
  loginForm: FormGroup;
  isLoading = false;
  showPassword = false;
  authService = inject(AuthService);
  router = inject(Router);

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  constructor(
    private fb: FormBuilder,
  ) {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const {userName: userName, password} = this.loginForm.value;
      this.loginUser(userName, password);

    }
  }

  loginUser(userName: string, password: string) {

    this.authService.login(userName, password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.log('Login failed', error);
      }
    })

  }
}
