import { Injectable } from '@angular/core';
import { MateriaPrima } from '../model/materia-prima';
import { GenericService } from './generic.service';
import { environment } from '../../environments/environment.development';

/**
 * Service para MateriaPrima.
 * Extiende GenericService<MateriaPrima> para heredar los 5 métodos HTTP
 * sin necesidad de redefinirlos.
 * Solo implementa getUrl() con su endpoint específico.
 */
@Injectable({
  providedIn: 'root',
})
export class MateriaPrimaService extends GenericService<MateriaPrima> {

  protected override getUrl(): string {
    return `${environment.HOST}/materias-primas`;
  }
}
