// Generated by https://quicktype.io

export interface Token {
    token: string;
}

export interface Usuario {
    id:              number;
    nombre:          string;
    apellido:        string;
    telefono:        string;
    correo:          string;
    fechaNacimiento: string;
    rol:             string;
    ubicacion:       Ubicacion;
}

export interface Ubicacion{
    pais: string;
    provincia: string;
    localidad: string;
    barrio: string;
    direccion: string;
}

export interface Resumen{
    pedidosPendientes:number;
    pedidosConfirmados:number;
    productosStock:number;
    pedidosPresupuesto:number;
}