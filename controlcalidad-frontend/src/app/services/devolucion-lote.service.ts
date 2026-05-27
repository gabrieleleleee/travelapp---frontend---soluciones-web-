import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DevolucionLote } from '../model/devolucion-lote';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class DevolucionLoteService {
  private url = `${environment.HOST}/devoluciones`;
  private readonly http = inject(HttpClient);

  findAll() {
    return this.http.get<DevolucionLote[]>(this.url);
  }

  findById(id: number) {
    return this.http.get<DevolucionLote>(`${this.url}/${id}`);
  }

  save(dato: DevolucionLote) {
    return this.http.post<DevolucionLote>(this.url, dato);
  }

  update(id: number, dato: DevolucionLote) {
    return this.http.put<DevolucionLote>(`${this.url}/${id}`, dato);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
