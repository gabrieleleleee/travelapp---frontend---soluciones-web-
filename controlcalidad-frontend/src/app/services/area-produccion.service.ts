import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AreaProduccion } from '../model/area-produccion';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AreaProduccionService {
  private url = `${environment.HOST}/areas-produccion`;
  private readonly http = inject(HttpClient);

  findAll() {
    return this.http.get<AreaProduccion[]>(this.url);
  }

  findById(id: number) {
    return this.http.get<AreaProduccion>(`${this.url}/${id}`);
  }

  save(dato: AreaProduccion) {
    return this.http.post<AreaProduccion>(this.url, dato);
  }

  update(id: number, dato: AreaProduccion) {
    return this.http.put<AreaProduccion>(`${this.url}/${id}`, dato);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
