import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UnidadMedida } from '../model/unidad-medida';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UnidadMedidaService {
  private url = `${environment.HOST}/unidades-medida`;
  private readonly http = inject(HttpClient);

  findAll() {
    return this.http.get<UnidadMedida[]>(this.url);
  }

  findById(id: number) {
    return this.http.get<UnidadMedida>(`${this.url}/${id}`);
  }

  save(dato: UnidadMedida) {
    return this.http.post<UnidadMedida>(this.url, dato);
  }

  update(id: number, dato: UnidadMedida) {
    return this.http.put<UnidadMedida>(`${this.url}/${id}`, dato);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
