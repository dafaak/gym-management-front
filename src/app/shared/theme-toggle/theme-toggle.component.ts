import { Component } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  imports: [CommonModule],
  templateUrl: './theme-toggle.component.html',
  standalone: true,
  styleUrl: './theme-toggle.component.css'
})
export class ThemeToggleComponent {
  constructor(public themeService: ThemeService) {
  }

  toggle() {
    this.themeService.toggleTheme();
  }

  // get isDark() {
  //   return this.themeService.isDarkTheme$() === 'dark';
  // }
}
