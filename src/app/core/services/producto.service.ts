import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BodyPagination, ResponseWrapper } from '../models/response-wrapper.model';
import { Producto } from '../models/producto.model';
import { API_URL } from '../constants';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient, private utils: UtilsService) { }

  getProductos(
    queryParams?:{
      page?:number,
      size?:number,
      estado?:boolean,
      sort?:string,
      sortBy?:string
    }
  ): Observable<ResponseWrapper<BodyPagination<Producto>>>{
    return this.http.get<ResponseWrapper<BodyPagination<Producto>>>(`${API_URL}/producto${this.utils.getQuerysForPath(queryParams)}`);
  }

  getProducto(id: Number): Observable<ResponseWrapper<Producto>>{
    return this.http.get<ResponseWrapper<Producto>>(`${API_URL}/producto/${id}`);
  }
  createProducto(body:any){
    return this.http.post<ResponseWrapper<Producto>>(`${API_URL}/producto`, body);
  }


  setProductoSelected(producto: Producto){
    localStorage.setItem('productoSelected', JSON.stringify(producto));
  }
  get productoSelected(){
    return JSON.parse(localStorage.getItem('productoSelected') as string) as Producto;
  }
}
