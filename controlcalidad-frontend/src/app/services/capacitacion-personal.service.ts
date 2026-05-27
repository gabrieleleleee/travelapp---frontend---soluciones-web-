import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CapacitacionPersonal } from '../model/capacitacion-personal';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CapacitacionPersonalService {
  private url = `${environment.HOST}/capacitaciones`;
  private readonly http = inject(HttpClient);

  findAll() {
    return this.http.get<CapacitacionPersonal[]>(this.url);
  }

  findById(id: number) {
    return this.http.get<CapacitacionPersonal>(`${this.url}/${id}`);
  }

  save(dato: CapacitacionPersonal) {
    return this.http.post<CapacitacionPersonal>(this.url, dato);
  }

  update(id: number, dato: CapacitacionPersonal) {
    return this.http.put<CapacitacionPersonal>(`${this.url}/${id}`, dato);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
