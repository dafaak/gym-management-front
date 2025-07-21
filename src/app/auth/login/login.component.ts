import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.css'
})
export class LoginComponent {

  hide = true;
  loginForm: FormGroup;
  isLoading = false;
  showPassword = false;

  // get currentTheme() {
  //   return this.themeService.getCurrentTheme();
  // }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  constructor(
    private fb: FormBuilder,
    // private auth: AuthService,
    private themeService: ThemeService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const {email, password} = this.loginForm.value;
      // Aquí puedes hacer una llamada HTTP real
      // Simulamos login:
      // this.auth.login('FAKE_TOKEN');
      this.router.navigate(['/dashboard']);
    }
  }
}
