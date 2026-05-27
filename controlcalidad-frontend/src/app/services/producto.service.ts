import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Producto } from '../model/producto';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private url = `${environment.HOST}/productos`;
  private readonly http = inject(HttpClient);

  findAll() {
    return this.http.get<Producto[]>(this.url);
  }

  findById(id: number) {
    return this.http.get<Producto>(`${this.url}/${id}`);
  }

  save(dato: Producto) {
    return this.http.post<Producto>(this.url, dato);
  }

  update(id: number, dato: Producto) {
    return this.http.put<Producto>(`${this.url}/${id}`, dato);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
