import { Routes } from '@angular/router';
// FABIAN
import { RolComponent } from '../pages/rol/rol.component';
import { UsuarioComponent } from '../pages/usuario/usuario.component';
import { ProductoComponent } from '../pages/producto/producto.component';
import { EstandarCalidadComponent } from '../pages/estandar-calidad/estandar-calidad.component';
import { LoteComponent } from '../pages/lote/lote.component';
// FRANK
import { MateriaPrimaComponent } from '../pages/materia-prima/materia-prima.component';
import { ProveedorComponent } from '../pages/proveedor/proveedor.component';
import { MaquinariaEquipoComponent } from '../pages/maquinaria-equipo/maquinaria-equipo.component';
import { InspeccionComponent } from '../pages/inspeccion/inspeccion.component';
import { AccionCorrectivaComponent } from '../pages/accion-correctiva/accion-correctiva.component';
// KETTY
import { AreaProduccionComponent } from '../pages/area-produccion/area-produccion.component';
import { BitacoraAuditoriaComponent } from '../pages/bitacora-auditoria/bitacora-auditoria.component';
import { MotivoRechazoComponent } from '../pages/motivo-rechazo/motivo-rechazo.component';
import { UnidadMedidaComponent } from '../pages/unidad-medida/unidad-medida.component';
import { PermisoComponent } from '../pages/permiso/permiso.component';
// MIRIAN
import { DefectoComponent } from '../pages/defecto/defecto.component';
import { AlertaCalidadComponent } from '../pages/alerta-calidad/alerta-calidad.component';
import { CapacitacionPersonalComponent } from '../pages/capacitacion-personal/capacitacion-personal.component';
import { DevolucionLoteComponent } from '../pages/devolucion-lote/devolucion-lote.component';
import { HistorialMantenimientoComponent } from '../pages/historial-mantenimiento/historial-mantenimiento.component';
// GABRIEL
import { DetalleInspeccionComponent } from '../pages/detalle-inspeccion/detalle-inspeccion.component';
import { CategoriaProductoComponent } from '../pages/categoria-producto/categoria-producto.component';

export const routes: Routes = [
  { path: 'roles', component: RolComponent },
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'productos', component: ProductoComponent },
  { path: 'estandares', component: EstandarCalidadComponent },
  { path: 'lotes', component: LoteComponent },
  { path: 'materias-primas', component: MateriaPrimaComponent },
  { path: 'proveedores', component: ProveedorComponent },
  { path: 'maquinarias', component: MaquinariaEquipoComponent },
  { path: 'inspecciones', component: InspeccionComponent },
  { path: 'acciones-correctivas', component: AccionCorrectivaComponent },
  { path: 'areas-produccion', component: AreaProduccionComponent },
  { path: 'bitacora', component: BitacoraAuditoriaComponent },
  { path: 'motivos-rechazo', component: MotivoRechazoComponent },
  { path: 'unidades-medida', component: UnidadMedidaComponent },
  { path: 'permisos', component: PermisoComponent },
  { path: 'defectos', component: DefectoComponent },
  { path: 'alertas', component: AlertaCalidadComponent },
  { path: 'capacitaciones', component: CapacitacionPersonalComponent },
  { path: 'devoluciones', component: DevolucionLoteComponent },
  { path: 'historiales', component: HistorialMantenimientoComponent },
  { path: 'detalles-inspeccion', component: DetalleInspeccionComponent },
  { path: 'categorias', component: CategoriaProductoComponent },
  { path: '', redirectTo: 'roles', pathMatch: 'full' },
];
