import { Injectable } from '@angular/core';
import { MaquinariaEquipo } from '../model/maquinaria-equipo';
import { GenericService } from './generic.service';
import { environment } from '../../environments/environment.development';

/**
 * Service para MaquinariaEquipo.
 * Extiende GenericService<MaquinariaEquipo> para heredar los 5 métodos HTTP
 * sin necesidad de redefinirlos.
 * Solo implementa getUrl() con su endpoint específico.
 */
@Injectable({
  providedIn: 'root',
})
export class MaquinariaEquipoService extends GenericService<MaquinariaEquipo> {

  protected override getUrl(): string {
    return `${environment.HOST}/maquinarias`;
  }
}
