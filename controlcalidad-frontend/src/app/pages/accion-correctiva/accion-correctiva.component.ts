import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccionCorrectiva } from '../../model/accion-correctiva';
import { AccionCorrectivaService } from '../../services/accion-correctiva.service';

@Component({
  selector: 'app-accion-correctiva',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './accion-correctiva.component.html',
  styleUrl: './accion-correctiva.component.css',
})
export class AccionCorrectivaComponent implements OnInit {
  protected lista = signal<AccionCorrectiva[]>([]);
  protected editando = signal<boolean>(false);
  protected idSeleccionado = signal<number>(0);
  protected mensajeExito = signal<string>('');
  protected mensajeError = signal<string>('');
  protected formulario: FormGroup;
  private readonly service = inject(AccionCorrectivaService);
  private readonly fb = inject(FormBuilder);

  constructor() {
    this.formulario = this.fb.group({
      idInspeccion: [0, [Validators.required, Validators.min(1)]],
      accionTomada: ['', [Validators.required]],
      fechaRegistro: ['', [Validators.required]],
      observacion: [''],
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
    const datos = this.formulario.value as AccionCorrectiva;

    if (datos.fechaRegistro && datos.fechaRegistro.length === 16) {
      datos.fechaRegistro = datos.fechaRegistro + ':00';
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

  editar(item: AccionCorrectiva): void {
    this.editando.set(true);
    this.idSeleccionado.set((item as any).idAccion);
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
