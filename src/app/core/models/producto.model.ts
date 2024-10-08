// Generated by https://quicktype.io



export interface Producto {
    id:        number;
    nombre:    string;
    estado:    boolean;
    versiones: Version[];
}

export interface Version {
    id:              number;
    nombre:          string;
    descripcion:     null|string;
    precio:          null|number;
    precioDescuento: null|number;
    estado:          boolean;
    fecha:           string;
    stock:           null|number;
    imagen:          null|string;
}




export interface ProductoCart {
    id:        number;
    nombre:    string;
    estado:    boolean;
    versiones: VersionCart[];
}

export interface VersionCart {
    id:              number;
    nombre:          string;
    precio:          number;
    precioDescuento: number;
    estado:          boolean;
    imagen:          null|string;
    cantidad:        number;
    descripcion:     string|null;
}
