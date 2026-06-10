import { Injectable } from '@angular/core';
import { DetalleInspeccion } from '../model/detalle-inspeccion';
import { GenericService } from './generic.service';
import { environment } from '../../environments/environment.development';

/**
 * Service para DetalleInspeccion.
 * Extiende GenericService<DetalleInspeccion> para heredar los 5 métodos HTTP
 * sin necesidad de redefinirlos.
 * Solo implementa getUrl() con su endpoint específico.
 */
@Injectable({
  providedIn: 'root',
})
export class DetalleInspeccionService extends GenericService<DetalleInspeccion> {

  protected override getUrl(): string {
    return `${environment.HOST}/detalles-inspeccion`;
  }
}
