import { Routes } from '@angular/router';
import { authGuard } from '../guards/auth.guard';
import { LoginComponent } from '../login/login.component';
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
  // Ruta publica: login
  { path: 'login', component: LoginComponent },

  // Rutas protegidas con authGuard
  { path: 'roles',               component: RolComponent,                  canActivate: [authGuard] },
  { path: 'usuarios',            component: UsuarioComponent,              canActivate: [authGuard] },
  { path: 'productos',           component: ProductoComponent,             canActivate: [authGuard] },
  { path: 'estandares',          component: EstandarCalidadComponent,      canActivate: [authGuard] },
  { path: 'lotes',               component: LoteComponent,                 canActivate: [authGuard] },
  { path: 'materias-primas',     component: MateriaPrimaComponent,         canActivate: [authGuard] },
  { path: 'proveedores',         component: ProveedorComponent,            canActivate: [authGuard] },
  { path: 'maquinarias',         component: MaquinariaEquipoComponent,     canActivate: [authGuard] },
  { path: 'inspecciones',        component: InspeccionComponent,           canActivate: [authGuard] },
  { path: 'acciones-correctivas',component: AccionCorrectivaComponent,     canActivate: [authGuard] },
  { path: 'areas-produccion',    component: AreaProduccionComponent,       canActivate: [authGuard] },
  { path: 'bitacora',            component: BitacoraAuditoriaComponent,    canActivate: [authGuard] },
  { path: 'motivos-rechazo',     component: MotivoRechazoComponent,        canActivate: [authGuard] },
  { path: 'unidades-medida',     component: UnidadMedidaComponent,         canActivate: [authGuard] },
  { path: 'permisos',            component: PermisoComponent,              canActivate: [authGuard] },
  { path: 'defectos',            component: DefectoComponent,              canActivate: [authGuard] },
  { path: 'alertas',             component: AlertaCalidadComponent,        canActivate: [authGuard] },
  { path: 'capacitaciones',      component: CapacitacionPersonalComponent, canActivate: [authGuard] },
  { path: 'devoluciones',        component: DevolucionLoteComponent,       canActivate: [authGuard] },
  { path: 'historiales',         component: HistorialMantenimientoComponent,canActivate: [authGuard] },
  { path: 'detalles-inspeccion', component: DetalleInspeccionComponent,    canActivate: [authGuard] },
  { path: 'categorias',          component: CategoriaProductoComponent,    canActivate: [authGuard] },
  { path: '',                    redirectTo: 'login',                      pathMatch: 'full' },
];
