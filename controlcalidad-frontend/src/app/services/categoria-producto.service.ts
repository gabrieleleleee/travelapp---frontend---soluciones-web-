import { Injectable } from '@angular/core';
import { CategoriaProducto } from '../model/categoria-producto';
import { GenericService } from './generic.service';
import { environment } from '../../environments/environment.development';

/**
 * Service para CategoriaProducto.
 * Extiende GenericService<CategoriaProducto> para heredar los 5 métodos HTTP
 * sin necesidad de redefinirlos.
 * Solo implementa getUrl() con su endpoint específico.
 */
@Injectable({
  providedIn: 'root',
})
export class CategoriaProductoService extends GenericService<CategoriaProducto> {

  protected override getUrl(): string {
    return `${environment.HOST}/categorias`;
  }
}
