import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';
import { GenericService } from './generic.service';
import { environment } from '../../environments/environment.development';

/**
 * Service para Producto.
 * Extiende GenericService<Producto> para heredar los 5 métodos HTTP
 * sin necesidad de redefinirlos.
 * Solo implementa getUrl() con su endpoint específico.
 */
@Injectable({
  providedIn: 'root',
})
export class ProductoService extends GenericService<Producto> {

  protected override getUrl(): string {
    return `${environment.HOST}/productos`;
  }
}
