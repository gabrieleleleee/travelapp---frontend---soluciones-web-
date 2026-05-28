import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HistorialMantenimiento } from '../../model/historial-mantenimiento';
import { HistorialMantenimientoService } from '../../services/historial-mantenimiento.service';

@Component({
  selector: 'app-historial-mantenimiento',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './historial-mantenimiento.component.html',
  styleUrl: './historial-mantenimiento.component.css',
})
export class HistorialMantenimientoComponent implements OnInit {
  protected lista = signal<HistorialMantenimiento[]>([]);
  protected editando = signal<boolean>(false);
  protected idSeleccionado = signal<number>(0);
  protected mensajeExito = signal<string>('');
  protected mensajeError = signal<string>('');
  protected formulario: FormGroup;
  private readonly service = inject(HistorialMantenimientoService);
  private readonly fb = inject(FormBuilder);

  constructor() {
    this.formulario = this.fb.group({
      idEquipo: [0, [Validators.required, Validators.min(1)]],
      fechaMantenimiento: ['', [Validators.required]],
      tipoMantenimiento: ['', [Validators.required]],
      descripcionActividad: ['', [Validators.required]],
      tecnicoResponsable: ['', [Validators.required]],
      costo: [0, [Validators.required, Validators.min(0)]],
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
    const datos = this.formulario.value as HistorialMantenimiento;

    if (datos.fechaMantenimiento && datos.fechaMantenimiento.length === 16) {
      datos.fechaMantenimiento = datos.fechaMantenimiento + ':00';
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

  editar(item: HistorialMantenimiento): void {
    this.editando.set(true);
    this.idSeleccionado.set((item as any).idMantenimiento);
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
