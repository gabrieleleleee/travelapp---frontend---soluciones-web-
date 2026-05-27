import { MaquinariaEquipo } from './maquinaria-equipo';
export class HistorialMantenimiento {
    idMantenimiento: number = 0;
    maquinariaEquipo: MaquinariaEquipo = new MaquinariaEquipo();
    fechaMantenimiento: string = '';
    tipoMantenimiento: string = '';
    descripcionActividad: string = '';
    tecnicoResponsable: string = '';
    costo: number = 0;
    estado: boolean = true;
}
