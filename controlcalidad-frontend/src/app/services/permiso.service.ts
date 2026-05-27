import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Permiso } from '../model/permiso';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PermisoService {
  private url = `${environment.HOST}/permisos`;
  private readonly http = inject(HttpClient);

  findAll() {
    return this.http.get<Permiso[]>(this.url);
  }

  findById(id: number) {
    return this.http.get<Permiso>(`${this.url}/${id}`);
  }

  save(dato: Permiso) {
    return this.http.post<Permiso>(this.url, dato);
  }

  update(id: number, dato: Permiso) {
    return this.http.put<Permiso>(`${this.url}/${id}`, dato);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
