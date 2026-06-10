import { Injectable } from '@angular/core';
import { AlertaCalidad } from '../model/alerta-calidad';
import { GenericService } from './generic.service';
import { environment } from '../../environments/environment.development';

/**
 * Service para AlertaCalidad.
 * Extiende GenericService<AlertaCalidad> para heredar los 5 métodos HTTP
 * sin necesidad de redefinirlos.
 * Solo implementa getUrl() con su endpoint específico.
 */
@Injectable({
  providedIn: 'root',
})
export class AlertaCalidadService extends GenericService<AlertaCalidad> {

  protected override getUrl(): string {
    return `${environment.HOST}/alertas`;
  }
}
