import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto, ProductoCart, Version, VersionCart } from '../models/producto.model';
import { API_URL, IMG_URL } from '../constants';
import { HttpClient } from '@angular/common/http';
import { BodyPagination, ResponseWrapper } from '../models/response-wrapper.model';
import { Pedido } from '../models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartList: ProductoCart[] = [];
  
  private _cart: BehaviorSubject<ProductoCart[]>;

  constructor(private http:HttpClient) {
    this._cart = new BehaviorSubject<ProductoCart[]>([]);
   }

  get cart(): Observable<ProductoCart[]>{
    return this._cart.asObservable();
  }
  get totalUnidades(): number{
    return this.cartList.reduce(
      (total, prod)=> total + prod.versiones.reduce((verTotal, ver) => verTotal + ver.cantidad, 0), 0
    )
  }
  get precioTotal():number{
    return this.cartList.reduce(
      (total, prod)=> total + prod.versiones.reduce((verTotal, ver) => verTotal + (ver.precio * ver.cantidad), 0), 0
    )
  }


  doPedido(body: any): Observable<ResponseWrapper<Pedido>>{
    return this.http.post<ResponseWrapper<Pedido>>(`${API_URL}/pedido`, body);
  }
   addProducto(producto: Producto, idVersion: number){
    
    let indexProducto = this.cartList.findIndex(el=> el.id === producto.id);
    if(indexProducto !== -1){
      let versionInCart: VersionCart|undefined = this.cartList[indexProducto].versiones.find(el=> el.id === idVersion);
      if(versionInCart){
        versionInCart.cantidad++;
      }else{
        this.cartList[indexProducto].versiones.push(this.addVersionCart(producto.versiones.find(el=> el.id === idVersion) as Version));
      }

    }else{
      this.cartList.push({
        estado: producto.estado,
        id: producto.id,
        nombre: producto.nombre,
        versiones: [this.addVersionCart(producto.versiones.find(el=> el.id === idVersion) as Version)]
      })
    }

    this._cart.next(this.cartList);
   }

   removeVersion(producto: ProductoCart, idVersion: number){
    let productoInCart: ProductoCart|undefined = this.cartList.find(el=> el.id === producto.id);
    if(productoInCart){
      let versionInCart: VersionCart = productoInCart.versiones[productoInCart.versiones.findIndex(el=> el.id === idVersion)];
      versionInCart.cantidad -= 1;
      if(versionInCart.cantidad < 1){
        productoInCart.versiones = productoInCart.versiones.filter(el=> el.cantidad >= 1)
        if(productoInCart.versiones.length === 0){
          this.removeItem(productoInCart, idVersion);
          return;
        }
      }

    }
    this._cart.next(this.cartList);
   }
   addVersion(producto: ProductoCart, idVersion: number){
    let prodInCart = this.cartList.find(el=>el.id === producto.id)
    if(prodInCart){
      prodInCart.versiones[prodInCart.versiones.findIndex(el=>el.id === idVersion)].cantidad += 1;
    }
    this._cart.next(this.cartList);
   }

   removeItem(producto: ProductoCart, idVersion: number){
    let productoInCart = this.cartList.find(el=> el.id === producto.id);
    if(productoInCart){
      productoInCart.versiones = productoInCart.versiones.filter(el=> el.id !== idVersion);
    }
    if(productoInCart?.versiones.length === 0){
      this.cartList = this.cartList.filter(el=> el.id !== productoInCart?.id);
    }
    this._cart.next(this.cartList);
   }
   resetCart(){
    this.cartList = [];
    this._cart.next(this.cartList);
   }


   setPedidoSelected(pedido: Pedido|null){
    if(pedido==null)
      localStorage.removeItem('pedidoSelected');
    localStorage.setItem('pedidoSelected', JSON.stringify(pedido));
   }

   get pedidoSelected(): Pedido{
    return JSON.parse(localStorage.getItem('pedidoSelected') as string) as Pedido;
   }

   getPedidos(): Observable<ResponseWrapper<BodyPagination<Pedido>>>{
    return this.http.get<ResponseWrapper<BodyPagination<Pedido>>>(`${API_URL}/pedido`);
   }

   cancelPedido(idPedido: number){
    return this.http.delete(`${API_URL}/pedido/${idPedido}`);
   }
   reactivarPedido(idPedido:number){
    return this.http.patch(`${API_URL}/pedido/reactivar/${idPedido}`, null);
   }
   actualizarPedido(idPedido:number, body: any): Observable<ResponseWrapper<Pedido>>{
    return this.http.put<ResponseWrapper<Pedido>>(`${API_URL}/pedido/${idPedido}`, body);
   }
   confirmarPedido(idPedido:number, body:any): Observable<ResponseWrapper<Pedido>>{
    return this.http.patch<ResponseWrapper<Pedido>>(`${API_URL}/pedido/${idPedido}/confirmar`, body);
   }

   private addVersionCart(version:Version): VersionCart{
    return {
      id: version.id,
          nombre: version.nombre,
          estado: version.estado,
          imagen: version.imagen,
          precio: version.precio,
          precioDescuento: version.precioDescuento,
          cantidad: 1,
          descripcion: version.descripcion
    } as VersionCart;
  }
}
