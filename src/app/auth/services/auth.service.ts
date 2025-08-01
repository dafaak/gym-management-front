import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = environment.authUrl;

  constructor(
    private http: HttpClient,
  ) {
  }

  login(userName: string, password: string): Observable<{ token: string, status: boolean }> {
    return this.http.post<{ token: string, status: boolean }>(`${this.authUrl}/login`, {userName: userName, password})
      .pipe(
        tap(response => {
          localStorage.setItem('access_token', response.token);
        })
      );
  };
}
