import { Component, Input } from '@angular/core';
import { Producto, Version } from '../../core/models/producto.model';
import { PricesService } from '../../core/services/prices.service';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'price-item',
  standalone: true,
  imports: [TitleCasePipe, CurrencyPipe, FontAwesomeModule],
  templateUrl: './price-item.component.html',
  styleUrl: './price-item.component.css'
})
export class PriceItemComponent {
  @Input() producto: Producto|undefined;
  @Input() selected:{id:number, nombre:string, precio?:number, precioDescuento?:number, precioNuevo?:number, precioDescuentoNuevo?:number }|undefined;
  iconArrow = faArrowRight;

  constructor(protected priceService:PricesService){

  }


  getTitleDesc(id:number):string{
    let message:string = "";
    let selection = this.priceService.getSelection(id);
    if(selection){
      message+='Se modificará el precio ';
      if(selection.hasOwnProperty('precio') && selection.precio && selection.hasOwnProperty('precioDescuento') && selection.precioDescuento)
        message+="público y de reventa.";
      else if(selection.hasOwnProperty('precio') && selection.precio)
        message+= "público.";
      else if(selection.hasOwnProperty('precioDescuento') && selection.precioDescuento)
        message+='de reventa.'
    }
    return message;
  }

  toggleSelection(version:Version, precio:number){
    let data: {id:number, nombre:string, precio?:number, precioDescuento?:number} = {
      id: version.id,
      nombre: this.producto?.nombre +' '+this.producto?.versiones.find(el=>el.id==version.id)?.nombre
    }
    if(precio==0){
      data.precio = version.precio as number;
    }
    if(precio==1){
      data.precioDescuento = version.precioDescuento as number;
    }
    if(precio==2){
      data.precio = version.precio as number;
      data.precioDescuento = version.precioDescuento as number;
    }

    this.priceService.toggleSelect(data);
  }


  diference(original:number, newNumber:number){
    return newNumber - original;
  }


  getRound(value:number|undefined, factor:number):number[]{
    if(!value)
      return [];
    if(value%factor==0)
      return[];
    
    let lower = Math.floor(value/factor) *factor;
    let upper = Math.ceil(value/factor) * factor;

    return [lower, upper];
  }
}
