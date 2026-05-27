import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Lote } from '../model/lote';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class LoteService {
  private url = `${environment.HOST}/lotes`;
  private readonly http = inject(HttpClient);

  findAll() {
    return this.http.get<Lote[]>(this.url);
  }

  findById(id: number) {
    return this.http.get<Lote>(`${this.url}/${id}`);
  }

  save(dato: Lote) {
    return this.http.post<Lote>(this.url, dato);
  }

  update(id: number, dato: Lote) {
    return this.http.put<Lote>(`${this.url}/${id}`, dato);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
