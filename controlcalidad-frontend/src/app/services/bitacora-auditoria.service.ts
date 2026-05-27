import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BitacoraAuditoria } from '../model/bitacora-auditoria';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class BitacoraAuditoriaService {
  private url = `${environment.HOST}/bitacora-auditoria`;
  private readonly http = inject(HttpClient);

  findAll() {
    return this.http.get<BitacoraAuditoria[]>(this.url);
  }

  findById(id: number) {
    return this.http.get<BitacoraAuditoria>(`${this.url}/${id}`);
  }

  save(dato: BitacoraAuditoria) {
    return this.http.post<BitacoraAuditoria>(this.url, dato);
  }

  update(id: number, dato: BitacoraAuditoria) {
    return this.http.put<BitacoraAuditoria>(`${this.url}/${id}`, dato);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
