import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Producto } from '../../core/models/producto.model';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { DateFormatPipe } from '../../core/pipe/date-format.pipe';
import { ProductoService } from '../../core/services/producto.service';
import { RouterModule } from '@angular/router';
import { NotificationService } from '../../core/services/notification.service';
import { Errors } from '../../core/models/response-wrapper.model';
import { LoaderComponent } from '../loader/loader.component';
import { reubicarItemInCache, updateItemInCache } from '../../core/interceptor/cache.interceptor';

@Component({
  selector: 'product-admin-card',
  standalone: true,
  imports: [TitleCasePipe, CurrencyPipe, DateFormatPipe, RouterModule, LoaderComponent],
  templateUrl: './product-admin-card.component.html',
  styleUrl: './product-admin-card.component.css'
})
export class ProductAdminCardComponent implements OnChanges{
  @Input() producto: Producto|undefined;
  @Output() cambioProducto = new EventEmitter<{accion:string, elemento:Producto}>;
  canActivate:boolean = false;
  loading=false;

  constructor(
    private productoService: ProductoService,
    private noti: NotificationService
  ){
    
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['producto']){
        this.canActivate = !this.producto?.estado && this.producto?.versiones.some(el=>el.estado) as boolean;
      }
  }


  actualizar(){
    this.productoService.setProductoSelected(this.producto as Producto);
  }

  onActivar(){
    this.loading = true;
    this.productoService.activateProduct(this.producto?.id as number, {all:false}).subscribe({
      next: res=>{
        this.loading = false;
        if(this.producto){
          this.producto.estado = true;
          this.cambioProducto.emit({accion: 'eliminar', elemento: this.producto});
        }
          
        reubicarItemInCache('/producto?estado=false', '/producto?estado=true', this.producto);
      },
      error: err=>{
        this.loading = false;
        if(err.error?.errors){
          err.error.errors.forEach((el:Errors)=>{
            this.noti.notificate(el.error, {error:true});
          })
        }else{
          this.noti.notificate('Ocurrio un error al activar el producto', {error:true})
        }
      }
    });
  }
}
