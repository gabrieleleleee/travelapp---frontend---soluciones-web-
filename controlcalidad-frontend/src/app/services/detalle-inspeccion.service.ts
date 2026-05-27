import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DetalleInspeccion } from '../model/detalle-inspeccion';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class DetalleInspeccionService {
  private url = `${environment.HOST}/detalles-inspeccion`;
  private readonly http = inject(HttpClient);

  findAll() {
    return this.http.get<DetalleInspeccion[]>(this.url);
  }

  findById(id: number) {
    return this.http.get<DetalleInspeccion>(`${this.url}/${id}`);
  }

  save(dato: DetalleInspeccion) {
    return this.http.post<DetalleInspeccion>(this.url, dato);
  }

  update(id: number, dato: DetalleInspeccion) {
    return this.http.put<DetalleInspeccion>(`${this.url}/${id}`, dato);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
