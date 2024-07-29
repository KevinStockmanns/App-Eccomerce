import { Injectable, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PricesService {
  private _productosSelected: WritableSignal<{id:number, nombre:string, precio?:number, precioDescuento?:number, precioNuevo?:number, precioDescuentoNuevo?:number}[]> = signal([]);

  constructor() { }


  get productosSelected(){
    return this._productosSelected.asReadonly();
  }

  getSelection(id:number){
    return this._productosSelected().find(el=>el.id == id);
  }


  
  isInSelecteds(id:number){
    return this._productosSelected().some(el=> el.id==id);
  }
  addSelect(data: {id:number, nombre:string, precio?:number, precioDescuento?:number}){
    const currentList = this._productosSelected();
    if(!currentList.some(el=>el.id==data.id)){
      this._productosSelected.update(()=>[...currentList, data]);
    }
  }
  removeSelect(id:number){
    this._productosSelected.update(list=> list.filter(el=>el.id != id));
  }

  toggleSelect(data: {id:number, nombre:string, precio?:number, precioDescuento?:number}){
    if(this.isInSelecteds(data.id))
      this.removeSelect(data.id);
    else
      this.addSelect(data);
  }
  clearSelection(){
    this._productosSelected.set([]);
  }
  newPrecio(porcentaje:number){
    this._productosSelected.update(list=>list.map(el=>{
      if(el.hasOwnProperty('precio') && el.precio){
        el.precioNuevo = el.precio + (el.precio * porcentaje / 100);
      }
      if(el.hasOwnProperty('precioDescuento') && el.precioDescuento){
        el.precioDescuentoNuevo = el.precioDescuento + (el.precioDescuento * porcentaje / 100);
      }

      return el;
    }))
  }
}
