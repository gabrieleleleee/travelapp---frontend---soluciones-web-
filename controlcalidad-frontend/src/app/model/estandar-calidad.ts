import { Producto } from './producto';
export class EstandarCalidad {
    idEstandar: number = 0;
    producto: Producto = new Producto();
    nombreParametro: string = '';
    unidadMedida: string = '';
    valorMinimo: number = 0;
    valorMaximo: number = 0;
    descripcion: string = '';
    estado: boolean = true;
}
