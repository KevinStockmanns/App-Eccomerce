export interface Provincias {
    cantidad:   number;
    inicio:     number;
    parametros: Parametros;
    provincias: Provincia[];
    total:      number;
}

export interface Parametros {
    max: number;
}

export interface Provincia {
    centroide: Centroide;
    id:        string;
    nombre:    string;
}

export interface Centroide {
    lat: number;
    lon: number;
}





export interface Localidades {
    cantidad:   number;
    inicio:     number;
    municipios: Localidad[];
    parametros: Parametros;
    total:      number;
}

export interface Localidad {
    centroide: Centroide;
    id:        string;
    nombre:    string;
    provincia: Provincia;
}

export interface Centroide {
    lat: number;
    lon: number;
}

export interface Provincia {
    id:     string;
    nombre: string;
}

export interface Parametros {
    provincia: string;
}
