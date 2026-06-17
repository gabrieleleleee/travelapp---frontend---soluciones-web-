import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  protected cargando = signal<boolean>(false);
  protected mensajeError = signal<string>('');

  protected formulario = this.fb.group({
    nombreUsuario: ['', [Validators.required]],
    contrasena: ['', [Validators.required, Validators.minLength(4)]],
  });

  iniciarSesion(): void {
    if (this.formulario.invalid) return;

    this.cargando.set(true);
    this.mensajeError.set('');

    this.authService.login(this.formulario.value as any).subscribe({
      next: () => {
        this.cargando.set(false);
        this.router.navigate(['/roles']);
      },
      error: () => {
        this.cargando.set(false);
        this.mensajeError.set('Usuario o contraseña incorrectos.');
      }
    });
  }
}
