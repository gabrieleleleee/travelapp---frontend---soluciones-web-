import { Injectable } from '@angular/core';
import { Inspeccion } from '../model/inspeccion';
import { GenericService } from './generic.service';
import { environment } from '../../environments/environment.development';

/**
 * Service para Inspeccion.
 * Extiende GenericService<Inspeccion> para heredar los 5 métodos HTTP
 * sin necesidad de redefinirlos.
 * Solo implementa getUrl() con su endpoint específico.
 */
@Injectable({
  providedIn: 'root',
})
export class InspeccionService extends GenericService<Inspeccion> {

  protected override getUrl(): string {
    return `${environment.HOST}/inspecciones`;
  }
}
