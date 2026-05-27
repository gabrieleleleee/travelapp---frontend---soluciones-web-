import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AlertaCalidad } from '../model/alerta-calidad';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AlertaCalidadService {
  private url = `${environment.HOST}/alertas`;
  private readonly http = inject(HttpClient);

  findAll() {
    return this.http.get<AlertaCalidad[]>(this.url);
  }

  findById(id: number) {
    return this.http.get<AlertaCalidad>(`${this.url}/${id}`);
  }

  save(dato: AlertaCalidad) {
    return this.http.post<AlertaCalidad>(this.url, dato);
  }

  update(id: number, dato: AlertaCalidad) {
    return this.http.put<AlertaCalidad>(`${this.url}/${id}`, dato);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
