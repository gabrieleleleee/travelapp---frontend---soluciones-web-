import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EstandarCalidad } from '../model/estandar-calidad';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class EstandarCalidadService {
  private url = `${environment.HOST}/estandares`;
  private readonly http = inject(HttpClient);

  findAll() {
    return this.http.get<EstandarCalidad[]>(this.url);
  }

  findById(id: number) {
    return this.http.get<EstandarCalidad>(`${this.url}/${id}`);
  }

  save(dato: EstandarCalidad) {
    return this.http.post<EstandarCalidad>(this.url, dato);
  }

  update(id: number, dato: EstandarCalidad) {
    return this.http.put<EstandarCalidad>(`${this.url}/${id}`, dato);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
