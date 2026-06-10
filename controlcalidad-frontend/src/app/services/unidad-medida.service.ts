import { Injectable } from '@angular/core';
import { UnidadMedida } from '../model/unidad-medida';
import { GenericService } from './generic.service';
import { environment } from '../../environments/environment.development';

/**
 * Service para UnidadMedida.
 * Extiende GenericService<UnidadMedida> para heredar los 5 métodos HTTP
 * sin necesidad de redefinirlos.
 * Solo implementa getUrl() con su endpoint específico.
 */
@Injectable({
  providedIn: 'root',
})
export class UnidadMedidaService extends GenericService<UnidadMedida> {

  protected override getUrl(): string {
    return `${environment.HOST}/unidades-medida`;
  }
}
