import { Rol } from './rol';
export class Usuario {
    idUsuario: number = 0;
    nombreUsuario: string = '';
    contrasena: string = '';
    nombreCompleto: string = '';
    correo: string = '';
    activo: boolean = true;
    roles: Rol[] = [];
}
