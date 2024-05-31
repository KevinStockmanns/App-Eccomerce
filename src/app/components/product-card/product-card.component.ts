import { Component, Input, SimpleChanges } from '@angular/core';
import { Producto, Version } from '../../core/models/producto.model';
import { IMG_URL } from '../../core/constants';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { CartService } from '../../core/services/cart.service';
import { UsuarioService } from '../../core/services/usuario.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'product-client-card',
  standalone: true,
  imports: [CurrencyPipe, TitleCasePipe, FontAwesomeModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductClientCardComponent{
  @Input() producto: Producto|undefined;
  iVersion: number = 0;
  versionActual: Version|undefined;
  imgUrl = IMG_URL;
  isLogin: boolean = this.usuarioService.isLogin();
  iconChevron = faChevronLeft;

  constructor(
    private cartService: CartService,
    protected usuarioService: UsuarioService
  ){
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['producto']) {
      if(this.producto){
        this.producto.versiones.sort((a, b)=> b.precio - a.precio);
      }
      this.versionActual = this.producto?.versiones[this.iVersion];
    }
  }



  changeVersion(newIndex: number){
    newIndex = this.iVersion + newIndex;
    if(this.producto?.versiones && newIndex < this.producto.versiones.length && newIndex >= 0){
      this.iVersion = newIndex;
      this.versionActual = this.producto.versiones[this.iVersion];
    }
  }

  hasMoreVersion(): boolean{
    if(this.producto?.versiones && this.producto.versiones.length > 1)
      return true;
    return false;
  }


  addToCart(idVersion:number|undefined){
    this.cartService.addProducto(this.producto as Producto, idVersion as number);
  }


  getLength(lista: any[]|undefined): number{
    return lista?.length || -1;
  }
}
