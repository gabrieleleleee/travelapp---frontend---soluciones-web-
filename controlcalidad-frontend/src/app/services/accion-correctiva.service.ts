import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AccionCorrectiva } from '../model/accion-correctiva';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AccionCorrectivaService {
  private url = `${environment.HOST}/acciones-correctivas`;
  private readonly http = inject(HttpClient);

  findAll() {
    return this.http.get<AccionCorrectiva[]>(this.url);
  }

  findById(id: number) {
    return this.http.get<AccionCorrectiva>(`${this.url}/${id}`);
  }

  save(dato: AccionCorrectiva) {
    return this.http.post<AccionCorrectiva>(this.url, dato);
  }

  update(id: number, dato: AccionCorrectiva) {
    return this.http.put<AccionCorrectiva>(`${this.url}/${id}`, dato);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
