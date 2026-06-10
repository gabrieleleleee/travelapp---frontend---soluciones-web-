import { Injectable } from '@angular/core';
import { HistorialMantenimiento } from '../model/historial-mantenimiento';
import { GenericService } from './generic.service';
import { environment } from '../../environments/environment.development';

/**
 * Service para HistorialMantenimiento.
 * Extiende GenericService<HistorialMantenimiento> para heredar los 5 métodos HTTP
 * sin necesidad de redefinirlos.
 * Solo implementa getUrl() con su endpoint específico.
 */
@Injectable({
  providedIn: 'root',
})
export class HistorialMantenimientoService extends GenericService<HistorialMantenimiento> {

  protected override getUrl(): string {
    return `${environment.HOST}/historiales-mantenimiento`;
  }
}
