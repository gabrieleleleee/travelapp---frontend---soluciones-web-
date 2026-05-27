import { Lote } from './lote';
export class DevolucionLote {
    idDevolucion: number = 0;
    lote: Lote = new Lote();
    fechaDevolucion: string = '';
    motivoDevolucion: string = '';
    cantidadDevuelta: number = 0;
    estado: boolean = true;
}
