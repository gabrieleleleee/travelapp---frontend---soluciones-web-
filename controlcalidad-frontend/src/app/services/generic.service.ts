import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Clase abstracta genérica base para todos los services de Angular.
 * <T> = tipo del modelo (Rol, Producto, Lote, etc.)
 *
 * Cada XxxService extiende esta clase y solo necesita implementar
 * getUrl() con su endpoint específico.
 *
 * Esto elimina la repetición de los 5 métodos HTTP en los 22 services.
 */
export abstract class GenericService<T> {

  protected readonly http = inject(HttpClient);

  /**
   * Cada subclase define su URL base.
   * Ejemplo en RolService: return `${environment.HOST}/roles`
   */
  protected abstract getUrl(): string;

  findAll() {
    return this.http.get<T[]>(this.getUrl());
  }

  findById(id: number) {
    return this.http.get<T>(`${this.getUrl()}/${id}`);
  }

  save(entity: T) {
    return this.http.post<T>(this.getUrl(), entity);
  }

  update(id: number, entity: T) {
    return this.http.put<T>(`${this.getUrl()}/${id}`, entity);
  }

  delete(id: number) {
    return this.http.delete(`${this.getUrl()}/${id}`);
  }
}
