import { Producto } from './producto';
export class Lote {
    idLote: number = 0;
    producto: Producto = new Producto();
    codigoLote: string = '';
    fechaProduccion: string = '';
    cantidadProducida: number = 0;
    estadoLote: string = '';
    observaciones: string = '';
    estado: boolean = true;
}
