import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MateriaPrima } from '../model/materia-prima';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MateriaPrimaService {
  private url = `${environment.HOST}/materias-primas`;
  private readonly http = inject(HttpClient);

  findAll() {
    return this.http.get<MateriaPrima[]>(this.url);
  }

  findById(id: number) {
    return this.http.get<MateriaPrima>(`${this.url}/${id}`);
  }

  save(dato: MateriaPrima) {
    return this.http.post<MateriaPrima>(this.url, dato);
  }

  update(id: number, dato: MateriaPrima) {
    return this.http.put<MateriaPrima>(`${this.url}/${id}`, dato);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
