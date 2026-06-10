import { Injectable } from '@angular/core';
import { Proveedor } from '../model/proveedor';
import { GenericService } from './generic.service';
import { environment } from '../../environments/environment.development';

/**
 * Service para Proveedor.
 * Extiende GenericService<Proveedor> para heredar los 5 métodos HTTP
 * sin necesidad de redefinirlos.
 * Solo implementa getUrl() con su endpoint específico.
 */
@Injectable({
  providedIn: 'root',
})
export class ProveedorService extends GenericService<Proveedor> {

  protected override getUrl(): string {
    return `${environment.HOST}/proveedores`;
  }
}
