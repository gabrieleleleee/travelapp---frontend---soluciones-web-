import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DevolucionLote } from '../../model/devolucion-lote';
import { DevolucionLoteService } from '../../services/devolucion-lote.service';

@Component({
  selector: 'app-devolucion-lote',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './devolucion-lote.component.html',
  styleUrl: './devolucion-lote.component.css',
})
export class DevolucionLoteComponent implements OnInit {
  protected lista = signal<DevolucionLote[]>([]);
  protected editando = signal<boolean>(false);
  protected idSeleccionado = signal<number>(0);
  protected mensajeExito = signal<string>('');
  protected mensajeError = signal<string>('');
  protected formulario: FormGroup;
  private readonly service = inject(DevolucionLoteService);
  private readonly fb = inject(FormBuilder);

  constructor() {
    this.formulario = this.fb.group({
      idLote: [0, [Validators.required, Validators.min(1)]],
      fechaDevolucion: ['', [Validators.required]],
      motivoDevolucion: ['', [Validators.required]],
      cantidadDevuelta: [0, [Validators.required, Validators.min(1)]],
      estado: [false],
    });
  }

  ngOnInit(): void { this.cargarDatos(); }

  cargarDatos(): void {
    this.service.findAll().subscribe({
      next: (data) => this.lista.set(data),
      error: () => this.mensajeError.set('Error al cargar los datos.')
    });
  }

  guardar(): void {
    if (this.formulario.invalid) return;
    const datos = this.formulario.value as DevolucionLote;

    if (datos.fechaDevolucion) {
      const d = new Date(datos.fechaDevolucion + 'T12:00:00');
      const y = d.getFullYear();
      const m = String(d.getMonth()+1).padStart(2,'0');
      const dd = String(d.getDate()).padStart(2,'0');
      datos.fechaDevolucion = `${y}-${m}-${dd}`;
    }
    if (this.editando()) {
      this.service.update(this.idSeleccionado(), datos).subscribe({
        next: () => { this.mensajeExito.set('Registro actualizado correctamente.'); this.limpiar(); this.cargarDatos(); },
        error: () => this.mensajeError.set('Error al actualizar el registro.')
      });
    } else {
      this.service.save(datos).subscribe({
        next: () => { this.mensajeExito.set('Registro creado correctamente.'); this.limpiar(); this.cargarDatos(); },
        error: () => this.mensajeError.set('Error al crear el registro.')
      });
    }
  }

  editar(item: DevolucionLote): void {
    this.editando.set(true);
    this.idSeleccionado.set((item as any).idDevolucion);
    this.formulario.patchValue(item as any);
    this.mensajeExito.set('');
    this.mensajeError.set('');
  }

  eliminar(id: number): void {
    if (confirm('Seguro de eliminar este registro?')) {
      this.service.delete(id).subscribe({
        next: () => { this.mensajeExito.set('Registro eliminado correctamente.'); this.cargarDatos(); },
        error: () => this.mensajeError.set('Error al eliminar el registro.')
      });
    }
  }

  limpiar(): void {
    this.formulario.reset();
    this.editando.set(false);
    this.idSeleccionado.set(0);
    this.mensajeExito.set('');
    this.mensajeError.set('');
  }
}
