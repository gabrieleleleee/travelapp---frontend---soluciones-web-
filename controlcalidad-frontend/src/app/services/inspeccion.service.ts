import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Inspeccion } from '../model/inspeccion';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class InspeccionService {
  private url = `${environment.HOST}/inspecciones`;
  private readonly http = inject(HttpClient);

  findAll() {
    return this.http.get<Inspeccion[]>(this.url);
  }

  findById(id: number) {
    return this.http.get<Inspeccion>(`${this.url}/${id}`);
  }

  save(dato: Inspeccion) {
    return this.http.post<Inspeccion>(this.url, dato);
  }

  update(id: number, dato: Inspeccion) {
    return this.http.put<Inspeccion>(`${this.url}/${id}`, dato);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
