import { Injectable } from '@angular/core';
import { DevolucionLote } from '../model/devolucion-lote';
import { GenericService } from './generic.service';
import { environment } from '../../environments/environment.development';

/**
 * Service para DevolucionLote.
 * Extiende GenericService<DevolucionLote> para heredar los 5 métodos HTTP
 * sin necesidad de redefinirlos.
 * Solo implementa getUrl() con su endpoint específico.
 */
@Injectable({
  providedIn: 'root',
})
export class DevolucionLoteService extends GenericService<DevolucionLote> {

  protected override getUrl(): string {
    return `${environment.HOST}/devoluciones`;
  }
}
