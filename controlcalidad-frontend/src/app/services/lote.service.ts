import { Injectable } from '@angular/core';
import { Lote } from '../model/lote';
import { GenericService } from './generic.service';
import { environment } from '../../environments/environment.development';

/**
 * Service para Lote.
 * Extiende GenericService<Lote> para heredar los 5 métodos HTTP
 * sin necesidad de redefinirlos.
 * Solo implementa getUrl() con su endpoint específico.
 */
@Injectable({
  providedIn: 'root',
})
export class LoteService extends GenericService<Lote> {

  protected override getUrl(): string {
    return `${environment.HOST}/lotes`;
  }
}
