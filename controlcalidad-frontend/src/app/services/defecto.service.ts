import { Injectable } from '@angular/core';
import { Defecto } from '../model/defecto';
import { GenericService } from './generic.service';
import { environment } from '../../environments/environment.development';

/**
 * Service para Defecto.
 * Extiende GenericService<Defecto> para heredar los 5 métodos HTTP
 * sin necesidad de redefinirlos.
 * Solo implementa getUrl() con su endpoint específico.
 */
@Injectable({
  providedIn: 'root',
})
export class DefectoService extends GenericService<Defecto> {

  protected override getUrl(): string {
    return `${environment.HOST}/defectos`;
  }
}
