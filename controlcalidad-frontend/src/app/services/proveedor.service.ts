import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Proveedor } from '../model/proveedor';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProveedorService {
  private url = `${environment.HOST}/proveedores`;
  private readonly http = inject(HttpClient);

  findAll() {
    return this.http.get<Proveedor[]>(this.url);
  }

  findById(id: number) {
    return this.http.get<Proveedor>(`${this.url}/${id}`);
  }

  save(dato: Proveedor) {
    return this.http.post<Proveedor>(this.url, dato);
  }

  update(id: number, dato: Proveedor) {
    return this.http.put<Proveedor>(`${this.url}/${id}`, dato);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
