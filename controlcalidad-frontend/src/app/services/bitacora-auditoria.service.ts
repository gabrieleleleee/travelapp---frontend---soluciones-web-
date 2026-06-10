import { Injectable } from '@angular/core';
import { BitacoraAuditoria } from '../model/bitacora-auditoria';
import { GenericService } from './generic.service';
import { environment } from '../../environments/environment.development';

/**
 * Service para BitacoraAuditoria.
 * Extiende GenericService<BitacoraAuditoria> para heredar los 5 métodos HTTP
 * sin necesidad de redefinirlos.
 * Solo implementa getUrl() con su endpoint específico.
 */
@Injectable({
  providedIn: 'root',
})
export class BitacoraAuditoriaService extends GenericService<BitacoraAuditoria> {

  protected override getUrl(): string {
    return `${environment.HOST}/bitacora-auditoria`;
  }
}
