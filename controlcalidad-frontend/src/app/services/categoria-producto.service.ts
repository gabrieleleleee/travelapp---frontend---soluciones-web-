import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CategoriaProducto } from '../model/categoria-producto';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CategoriaProductoService {
  private url = `${environment.HOST}/categorias`;
  private readonly http = inject(HttpClient);

  findAll() {
    return this.http.get<CategoriaProducto[]>(this.url);
  }

  findById(id: number) {
    return this.http.get<CategoriaProducto>(`${this.url}/${id}`);
  }

  save(dato: CategoriaProducto) {
    return this.http.post<CategoriaProducto>(this.url, dato);
  }

  update(id: number, dato: CategoriaProducto) {
    return this.http.put<CategoriaProducto>(`${this.url}/${id}`, dato);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
