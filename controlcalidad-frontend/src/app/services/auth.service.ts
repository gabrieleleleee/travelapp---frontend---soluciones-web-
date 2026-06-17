import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment.development';

export interface LoginRequest {
  nombreUsuario: string;
  contrasena: string;
}

export interface LoginResponse {
  token: string;
  nombreUsuario: string;
  nombreCompleto: string;
  roles: string[];
}

/**
 * Servicio de autenticacion del frontend.
 * Gestiona login, logout y el estado de sesion
 * usando Angular Signals para reactividad.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly url = `${environment.HOST}/auth`;

  // Signal que indica si el usuario esta autenticado
  isAuthenticated = signal<boolean>(this.checkToken());

  // Signal con los datos del usuario actual
  currentUser = signal<LoginResponse | null>(this.loadUser());

  login(credentials: LoginRequest) {
    return this.http.post<LoginResponse>(`${this.url}/login`, credentials)
      .pipe(
        tap(response => {
          // Guardar token y datos del usuario en localStorage
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response));
          // Actualizar signals
          this.isAuthenticated.set(true);
          this.currentUser.set(response);
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.isAuthenticated.set(false);
    this.currentUser.set(null);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  private checkToken(): boolean {
    return !!localStorage.getItem('token');
  }

  private loadUser(): LoginResponse | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
