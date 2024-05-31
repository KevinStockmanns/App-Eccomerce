import { Ubicacion } from "./usuario.model";

export interface Pedido {
    id:        number;
    nombre:    null|string;
    apellido:  null|string;
    correo:    null|string;
    telefono:  null|string;
    idUsuario: number|null;
    fecha:     Date;
    fechaRegistro:     Date;
    estado:    string;
    mensaje:   null|string;
    ordenes:   Orden[];
    ubicacion: Ubicacion;
}

export interface Orden {
    id:             number;
    producto:       OrdenProducto;
    cantidad:       number;
    precioUnitario: number;
    conDescuento:   boolean|null;
}

export interface OrdenProducto{
    idProducto: number;
    idVersion: number;
    nombreProducto: string;
    nombreVersion:string;
}