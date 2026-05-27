import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Rol } from '../model/rol';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class RolService {
  private url = `${environment.HOST}/roles`;
  private readonly http = inject(HttpClient);

  findAll() {
    return this.http.get<Rol[]>(this.url);
  }

  findById(id: number) {
    return this.http.get<Rol>(`${this.url}/${id}`);
  }

  save(dato: Rol) {
    return this.http.post<Rol>(this.url, dato);
  }

  update(id: number, dato: Rol) {
    return this.http.put<Rol>(`${this.url}/${id}`, dato);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
