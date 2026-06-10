import { Injectable } from '@angular/core';
import { AreaProduccion } from '../model/area-produccion';
import { GenericService } from './generic.service';
import { environment } from '../../environments/environment.development';

/**
 * Service para AreaProduccion.
 * Extiende GenericService<AreaProduccion> para heredar los 5 métodos HTTP
 * sin necesidad de redefinirlos.
 * Solo implementa getUrl() con su endpoint específico.
 */
@Injectable({
  providedIn: 'root',
})
export class AreaProduccionService extends GenericService<AreaProduccion> {

  protected override getUrl(): string {
    return `${environment.HOST}/areas-produccion`;
  }
}
