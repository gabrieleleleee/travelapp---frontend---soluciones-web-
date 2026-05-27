import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MaquinariaEquipo } from '../model/maquinaria-equipo';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MaquinariaEquipoService {
  private url = `${environment.HOST}/maquinarias`;
  private readonly http = inject(HttpClient);

  findAll() {
    return this.http.get<MaquinariaEquipo[]>(this.url);
  }

  findById(id: number) {
    return this.http.get<MaquinariaEquipo>(`${this.url}/${id}`);
  }

  save(dato: MaquinariaEquipo) {
    return this.http.post<MaquinariaEquipo>(this.url, dato);
  }

  update(id: number, dato: MaquinariaEquipo) {
    return this.http.put<MaquinariaEquipo>(`${this.url}/${id}`, dato);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
