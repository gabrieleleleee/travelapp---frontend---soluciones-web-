import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DetalleInspeccion } from '../../model/detalle-inspeccion';
import { DetalleInspeccionService } from '../../services/detalle-inspeccion.service';

@Component({
  selector: 'app-detalle-inspeccion',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './detalle-inspeccion.component.html',
  styleUrl: './detalle-inspeccion.component.css',
})
export class DetalleInspeccionComponent implements OnInit {
  protected lista = signal<DetalleInspeccion[]>([]);
  protected editando = signal<boolean>(false);
  protected idSeleccionado = signal<number>(0);
  protected mensajeExito = signal<string>('');
  protected mensajeError = signal<string>('');
  protected formulario: FormGroup;
  private readonly service = inject(DetalleInspeccionService);
  private readonly fb = inject(FormBuilder);

  constructor() {
    this.formulario = this.fb.group({
      idInspeccion: [0, [Validators.required, Validators.min(1)]],
      idEstandar: [0, [Validators.required, Validators.min(1)]],
      valorMedido: [0, [Validators.required, Validators.min(0)]],
      cumpleEstandar: [false],
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
    const datos = this.formulario.value as DetalleInspeccion;
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

  editar(item: DetalleInspeccion): void {
    this.editando.set(true);
    this.idSeleccionado.set((item as any).idDetalle);
    this.formulario.patchValue(item as any);
    this.mensajeExito.set('');
    this.mensajeError.set('');
  }

  eliminar(id: number): void {
    if (confirm('Esta seguro de eliminar este registro?')) {
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
