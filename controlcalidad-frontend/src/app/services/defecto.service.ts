import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Defecto } from '../model/defecto';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class DefectoService {
  private url = `${environment.HOST}/defectos`;
  private readonly http = inject(HttpClient);

  findAll() {
    return this.http.get<Defecto[]>(this.url);
  }

  findById(id: number) {
    return this.http.get<Defecto>(`${this.url}/${id}`);
  }

  save(dato: Defecto) {
    return this.http.post<Defecto>(this.url, dato);
  }

  update(id: number, dato: Defecto) {
    return this.http.put<Defecto>(`${this.url}/${id}`, dato);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
