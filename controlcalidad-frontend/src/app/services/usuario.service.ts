import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url = `${environment.HOST}/usuarios`;
  private readonly http = inject(HttpClient);

  findAll() {
    return this.http.get<Usuario[]>(this.url);
  }

  findById(id: number) {
    return this.http.get<Usuario>(`${this.url}/${id}`);
  }

  save(dato: Usuario) {
    return this.http.post<Usuario>(this.url, dato);
  }

  update(id: number, dato: Usuario) {
    return this.http.put<Usuario>(`${this.url}/${id}`, dato);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
