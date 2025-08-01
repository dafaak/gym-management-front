import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from "@angular/material/icon";
import { MatButton } from "@angular/material/button";
import { ThemeService } from "./core/services/theme.service";
import { ThemeToggleComponent } from "./shared/theme-toggle/theme-toggle.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule, ThemeToggleComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'gym-management-front';

  showPassword = false;

  ngOnInit() {

  }

  constructor(private themeService: ThemeService) {
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }


}
