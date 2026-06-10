import { Injectable } from '@angular/core';
import { CapacitacionPersonal } from '../model/capacitacion-personal';
import { GenericService } from './generic.service';
import { environment } from '../../environments/environment.development';

/**
 * Service para CapacitacionPersonal.
 * Extiende GenericService<CapacitacionPersonal> para heredar los 5 métodos HTTP
 * sin necesidad de redefinirlos.
 * Solo implementa getUrl() con su endpoint específico.
 */
@Injectable({
  providedIn: 'root',
})
export class CapacitacionPersonalService extends GenericService<CapacitacionPersonal> {

  protected override getUrl(): string {
    return `${environment.HOST}/capacitaciones`;
  }
}
