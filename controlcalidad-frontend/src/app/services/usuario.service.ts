import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { GenericService } from './generic.service';
import { environment } from '../../environments/environment.development';

/**
 * Service para Usuario.
 * Extiende GenericService<Usuario> para heredar los 5 métodos HTTP
 * sin necesidad de redefinirlos.
 * Solo implementa getUrl() con su endpoint específico.
 */
@Injectable({
  providedIn: 'root',
})
export class UsuarioService extends GenericService<Usuario> {

  protected override getUrl(): string {
    return `${environment.HOST}/usuarios`;
  }
}
