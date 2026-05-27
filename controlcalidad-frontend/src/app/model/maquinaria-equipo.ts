import { Proveedor } from './proveedor';
export class MaquinariaEquipo {
    idEquipo: number = 0;
    nombreEquipo: string = '';
    descripcion: string = '';
    estado: boolean = true;
    proveedor: Proveedor = new Proveedor();
}
