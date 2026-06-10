import { Injectable } from '@angular/core';
import { Permiso } from '../model/permiso';
import { GenericService } from './generic.service';
import { environment } from '../../environments/environment.development';

/**
 * Service para Permiso.
 * Extiende GenericService<Permiso> para heredar los 5 métodos HTTP
 * sin necesidad de redefinirlos.
 * Solo implementa getUrl() con su endpoint específico.
 */
@Injectable({
  providedIn: 'root',
})
export class PermisoService extends GenericService<Permiso> {

  protected override getUrl(): string {
    return `${environment.HOST}/permisos`;
  }
}
