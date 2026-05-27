import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HistorialMantenimiento } from '../model/historial-mantenimiento';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class HistorialMantenimientoService {
  private url = `${environment.HOST}/historiales-mantenimiento`;
  private readonly http = inject(HttpClient);

  findAll() {
    return this.http.get<HistorialMantenimiento[]>(this.url);
  }

  findById(id: number) {
    return this.http.get<HistorialMantenimiento>(`${this.url}/${id}`);
  }

  save(dato: HistorialMantenimiento) {
    return this.http.post<HistorialMantenimiento>(this.url, dato);
  }

  update(id: number, dato: HistorialMantenimiento) {
    return this.http.put<HistorialMantenimiento>(`${this.url}/${id}`, dato);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
