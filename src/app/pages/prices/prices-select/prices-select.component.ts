import { Component } from '@angular/core';
import { ProductoService } from '../../../core/services/producto.service';
import { NotificationService } from '../../../core/services/notification.service';
import { Producto } from '../../../core/models/producto.model';
import { Errors } from '../../../core/models/response-wrapper.model';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { LoaderComponent } from '../../../components/loader/loader.component';
import { PricesService } from '../../../core/services/prices.service';

@Component({
  selector: 'app-prices-select',
  standalone: true,
  imports: [TitleCasePipe, CurrencyPipe, LoaderComponent],
  templateUrl: './prices-select.component.html',
  styleUrl: './prices-select.component.css'
})
export class PricesSelectComponent {
  productos: Producto[]=[];
  productosSelected;
  loading:boolean = false;
  currentPage:number=0;

  constructor(
    private productoService: ProductoService,
    private priceService: PricesService,
    private noti: NotificationService
  ){
    this.productosSelected = priceService.productosSelected;
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(){
    this.loading = true;
    this.productoService.getProductos({page: this.currentPage}).subscribe({
      next:res=>{
        this.loading = false;
        this.productos = [...this.productos, ...res.body.content];
        if(this.currentPage < res.body.totalPages-1)
          this.currentPage++;
      },
      error: err=>{
        this.loading = false;
        if(err.error?.erros){
          err.error.errors.forEach((el:Errors)=>{
            this.noti.notificate(el.error, {error:true, time: 7000});
          })
        }else{
          this.noti.notificate('Ocurrio un error al cargar los productos.', {error:true})
        }
      }
    });
  }

  toggleSelected(version: {id:number, nombre:string, precio?:number|null, precioDescuento?:number|null}){
    if(!version.precio)
      delete version.precio;
    if(!version.precioDescuento)
      delete version.precioDescuento;
    this.priceService.toggleSelect(version as any);
  }

  isSelected(id:number){
    return this.priceService.isInSelecteds(id);
  }
  getTitleDesc(id:number):string{
    let message = '';

    return message;
  }
}
