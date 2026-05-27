import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inspeccion } from '../../model/inspeccion';
import { InspeccionService } from '../../services/inspeccion.service';

@Component({
  selector: 'app-inspeccion',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inspeccion.component.html',
  styleUrl: './inspeccion.component.css',
})
export class InspeccionComponent implements OnInit {

  // ✅ Signals en lugar de propiedades normales (NO Observables)
  protected lista = signal<Inspeccion[]>([]);
  protected editando = signal<boolean>(false);
  protected idSeleccionado = signal<number>(0);
  protected mensajeExito = signal<string>('');
  protected mensajeError = signal<string>('');

  protected formulario: FormGroup;
  private readonly service = inject(InspeccionService);
  private readonly fb = inject(FormBuilder);

  constructor() {
    this.formulario = this.fb.group({
    fechaHora: ['', [Validators.required]],
    observacionesGenerales: [''],
    resultadoAprobado: [false],
    estado: [false],
    });
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.service.findAll().subscribe({
      // ✅ Usamos signal.set() para actualizar el estado
      next: (data) => this.lista.set(data),
      error: () => this.mensajeError.set('Error al cargar los datos.')
    });
  }

  guardar(): void {
    if (this.formulario.invalid) return;
    const datos = this.formulario.value as Inspeccion;
    if (this.editando()) {
      this.service.update(this.idSeleccionado(), datos).subscribe({
        next: () => {
          this.mensajeExito.set('Registro actualizado correctamente.');
          this.limpiar();
          this.cargarDatos();
        },
        error: () => this.mensajeError.set('Error al actualizar el registro.')
      });
    } else {
      this.service.save(datos).subscribe({
        next: () => {
          this.mensajeExito.set('Registro creado correctamente.');
          this.limpiar();
          this.cargarDatos();
        },
        error: () => this.mensajeError.set('Error al crear el registro.')
      });
    }
  }

  editar(item: Inspeccion): void {
    // ✅ signal.set() para actualizar estado de edición
    this.editando.set(true);
    this.idSeleccionado.set((item as any).idInspeccion);
    this.formulario.patchValue(item as any);
    this.mensajeExito.set('');
    this.mensajeError.set('');
  }

  eliminar(id: number): void {
    if (confirm('¿Está seguro de eliminar este registro?')) {
      this.service.delete(id).subscribe({
        next: () => {
          this.mensajeExito.set('Registro eliminado correctamente.');
          this.cargarDatos();
        },
        error: () => this.mensajeError.set('Error al eliminar el registro.')
      });
    }
  }

  limpiar(): void {
    this.formulario.reset();
    // ✅ Reseteamos todos los signals
    this.editando.set(false);
    this.idSeleccionado.set(0);
    this.mensajeExito.set('');
    this.mensajeError.set('');
  }
}
