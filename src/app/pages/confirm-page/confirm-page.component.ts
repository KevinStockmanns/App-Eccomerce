import { Component } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Pedido } from '../../core/models/pedido.model';
import { HeaderComponent } from '../../components/header/header.component';
import { OrdenItemComponent } from '../../components/orden-item/orden-item.component';
import { CurrencyPipe, Location, TitleCasePipe } from '@angular/common';
import { updateItemInCache } from '../../core/interceptor/cache.interceptor';
import { NotificationService } from '../../core/services/notification.service';
import { LoaderComponent } from '../../components/loader/loader.component';

@Component({
  selector: 'app-confirm-page',
  standalone: true,
  imports: [HeaderComponent, TitleCasePipe, CurrencyPipe, LoaderComponent],
  templateUrl: './confirm-page.component.html',
  styleUrl: './confirm-page.component.css'
})
export class ConfirmPageComponent {
  pedido: Pedido;
  loadingResponse: boolean = false;

  jsonOrdenes: any[] = [];
  constructor(
    private cartService: CartService,
    private location: Location,
    private notification: NotificationService
  ){
    this.pedido = cartService.pedidoSelected;
  }


  cancelar(){
    this.location.back();
    this.cartService.setPedidoSelected(null);
  }


  applyNewPrecio(idOrden:number){
    let orden = {
      idOrden: idOrden,
      aplicarPrecioActual: true
    }

    this.jsonOrdenes = this.jsonOrdenes.filter(el=> el.idOrden !== idOrden);
    this.jsonOrdenes.push(orden);

  }
  applyPrecioReventa(idOrden: number){
    let orden = {
      idOrden: idOrden,
      aplicarDescuento: true
    }

    this.jsonOrdenes = this.jsonOrdenes.filter(el=> el.idOrden !== idOrden);
    this.jsonOrdenes.push(orden);
  }
  eliminarCambios(idOrden:number){
    this.jsonOrdenes = this.jsonOrdenes.filter(el=>el.idOrden != idOrden);
  }

  ordenInJson(idOrden:number):any{
    return this.jsonOrdenes.find(el=>el.idOrden == idOrden);
  }

  onConfirm(){
    this.loadingResponse = true;
    this.cartService.confirmarPedido(this.pedido.id, this.jsonOrdenes.length === 0 ? {} : {ordenes: this.jsonOrdenes}).subscribe({
      next: res=>{
        updateItemInCache(res.body, 'pedido');
        this.location.back()
        this.loadingResponse = false;
        this.notification.notificate('El pedido fue confirmado con éxito', {error:false});
      },
      error: err=>{
        this.loadingResponse = false;
        this.notification.notificate(err.error.errors[0].error || 'No se pudo confirmar el pedido. Intentalo más tarde', {error: true})
      }
    });
  }
}
