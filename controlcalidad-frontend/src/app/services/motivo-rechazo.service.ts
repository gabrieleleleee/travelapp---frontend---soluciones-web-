import { Injectable } from '@angular/core';
import { MotivoRechazo } from '../model/motivo-rechazo';
import { GenericService } from './generic.service';
import { environment } from '../../environments/environment.development';

/**
 * Service para MotivoRechazo.
 * Extiende GenericService<MotivoRechazo> para heredar los 5 métodos HTTP
 * sin necesidad de redefinirlos.
 * Solo implementa getUrl() con su endpoint específico.
 */
@Injectable({
  providedIn: 'root',
})
export class MotivoRechazoService extends GenericService<MotivoRechazo> {

  protected override getUrl(): string {
    return `${environment.HOST}/motivos-rechazo`;
  }
}
