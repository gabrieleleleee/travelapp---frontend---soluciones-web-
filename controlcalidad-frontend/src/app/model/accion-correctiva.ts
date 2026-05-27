import { Inspeccion } from './inspeccion';
export class AccionCorrectiva {
    idAccion: number = 0;
    accionTomada: string = '';
    fechaRegistro: string = '';
    observacion: string = '';
    estado: boolean = true;
    inspeccion: Inspeccion = new Inspeccion();
}
