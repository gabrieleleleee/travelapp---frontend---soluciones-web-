import { Lote } from './lote';
import { MateriaPrima } from './materia-prima';
export class Inspeccion {
    idInspeccion: number = 0;
    fechaHora: string = '';
    observacionesGenerales: string = '';
    resultadoAprobado: boolean = false;
    estado: boolean = true;
    lote: Lote = new Lote();
    materiaPrima: MateriaPrima = new MateriaPrima();
}
