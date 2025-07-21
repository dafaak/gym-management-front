import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private _isDarkTheme = new BehaviorSubject<boolean>(false);
  readonly isDarkTheme$ = this._isDarkTheme.asObservable();

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.loadTheme();
  }

  private loadTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.enableDarkTheme();
    } else {
      this.enableLightTheme();
    }
  }

  toggleTheme(): void {
    if (this._isDarkTheme.value) {
      this.enableLightTheme();
    } else {
      this.enableDarkTheme();
    }
    localStorage.setItem('theme', this._isDarkTheme.value ? 'dark' : 'light');
  }

  private enableDarkTheme(): void {
    this.renderer.addClass(document.documentElement, 'dark');
    this._isDarkTheme.next(true);
  }

  private enableLightTheme(): void {
    this.renderer.removeClass(document.documentElement, 'dark');
    this._isDarkTheme.next(false);
  }
}
