import { Injectable, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PricesService {
  private _productosSelected: WritableSignal<{id:number, nombre:string, precio?:number, precioDescuento?:number}[]> = signal([]);

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

}
