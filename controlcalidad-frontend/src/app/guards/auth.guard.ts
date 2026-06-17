import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Guard de autenticacion para Angular Router.
 * Protege todas las rutas del sistema.
 * Si el usuario no esta autenticado, lo redirige al login.
 */
export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  // No autenticado → redirigir al login
  router.navigate(['/login']);
  return false;
};
