import { Inspeccion } from './inspeccion';
import { EstandarCalidad } from './estandar-calidad';
export class DetalleInspeccion {
    idDetalle: number = 0;
    valorMedido: number = 0;
    cumpleEstandar: boolean = false;
    inspeccion: Inspeccion = new Inspeccion();
    estandarCalidad: EstandarCalidad = new EstandarCalidad();
}
