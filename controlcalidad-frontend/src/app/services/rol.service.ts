import { Injectable } from '@angular/core';
import { Rol } from '../model/rol';
import { GenericService } from './generic.service';
import { environment } from '../../environments/environment.development';

/**
 * Service para Rol.
 * Extiende GenericService<Rol> para heredar los 5 métodos HTTP
 * sin necesidad de redefinirlos.
 * Solo implementa getUrl() con su endpoint específico.
 */
@Injectable({
  providedIn: 'root',
})
export class RolService extends GenericService<Rol> {

  protected override getUrl(): string {
    return `${environment.HOST}/roles`;
  }
}
