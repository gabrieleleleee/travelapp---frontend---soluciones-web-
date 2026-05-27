import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MotivoRechazo } from '../model/motivo-rechazo';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MotivoRechazoService {
  private url = `${environment.HOST}/motivos-rechazo`;
  private readonly http = inject(HttpClient);

  findAll() {
    return this.http.get<MotivoRechazo[]>(this.url);
  }

  findById(id: number) {
    return this.http.get<MotivoRechazo>(`${this.url}/${id}`);
  }

  save(dato: MotivoRechazo) {
    return this.http.post<MotivoRechazo>(this.url, dato);
  }

  update(id: number, dato: MotivoRechazo) {
    return this.http.put<MotivoRechazo>(`${this.url}/${id}`, dato);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
