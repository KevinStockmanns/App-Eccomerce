import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Localidades, Provincias } from '../models/ubicacion.model';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  private URL_GEOREF :string = 'https://apis.datos.gob.ar/georef/api';

  constructor(private http: HttpClient) { }

  getProvincias(): Observable<Provincias>{
    return this.http.get<Provincias>(`${this.URL_GEOREF}/provincias?max=30`);
  }

  getLocalidades(provincia:string): Observable<Localidades>{
    return this.http.get<Localidades>(`${this.URL_GEOREF}/municipios?max=100&provincia=${provincia}`);
  }
}
