import { Component, Signal } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CartComponent } from '../../components/cart/cart.component';
import { CartService } from '../../core/services/cart.service';
import { RouterModule } from '@angular/router';
import { Pedido } from '../../core/models/pedido.model';
import { PedidoItemComponent } from '../../components/pedido-item/pedido-item.component';
import { NotificationService } from '../../core/services/notification.service';
import { UsuarioService } from '../../core/services/usuario.service';
import { LoaderComponent } from '../../components/loader/loader.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [HeaderComponent, CartComponent, RouterModule, PedidoItemComponent, LoaderComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {

  cartHasItem:boolean = false;
  cartEmpty: boolean = false;
  pedidoCancelado: Pedido[]|[] = [];
  pedidoVendido: Pedido[]|[] = [];
  pedidoConfirmado: Pedido[]|[] = [];
  pedidoPendiente: Pedido[]|[] = [];
  isAdmin: Signal<boolean>
  loading:boolean = false;

  constructor(
    private cartService: CartService,
    private notification: NotificationService,
    private usuarioService: UsuarioService
  ){
    this.isAdmin = this.usuarioService.isAdmin;
    this.cartService.cart.subscribe(el=> {
      this.cartHasItem = el.length > 0;
      this.cartEmpty = this.isCartEmpty();
    });

    this.loading = true;
    this.cartService.getPedidos().subscribe({
      next: res=> {
        this.pedidoCancelado = res.body.content.filter(el=> el.estado === 'CANCELADO');
        this.pedidoConfirmado = res.body.content.filter(el=> el.estado === 'CONFIRMADO');
        this.pedidoVendido = res.body.content.filter(el=> el.estado === 'VENDIDO');
        this.pedidoPendiente = res.body.content.filter(el=> el.estado === "PENDIENTE");
        this.cartEmpty = this.isCartEmpty();
        this.loading = false;
      },
      error: err=> {
        if(err.error.errors){
          err.error.errors.forEach((el: any)=>{
            notification.notificate(el.error, {error:true})
          })
        }else{
          notification.notificate('No se pudo obtener los pedidos. Intentalo de nuevo más tarde.', {error:true})
        }
        this.loading = false;
      }
    })
  }


  onCambioEstado(event: any){
    let pedidoIndex:number = this.pedidoPendiente.findIndex(el=>el.id === event.id);
    let pedidoACambiar:Pedido;
    let isIn = '';
    if(pedidoIndex !== -1){
      isIn = 'PENDIENTE';
      pedidoACambiar = this.pedidoPendiente[pedidoIndex];
    }else{
      pedidoIndex = this.pedidoConfirmado.findIndex(el=> el.id === event.id);
      if(pedidoIndex !== -1){
        isIn = 'CONFIRMADO';
        pedidoACambiar = this.pedidoConfirmado[pedidoIndex];
      }else{
        pedidoIndex = this.pedidoVendido.findIndex(el=> el.id === event.id);
        if(pedidoIndex !== -1){
          isIn = 'VENDIDO';
          pedidoACambiar = this.pedidoVendido[pedidoIndex];
        }else{
          pedidoIndex = this.pedidoCancelado.findIndex(el=>el.id === event.id);
          isIn = 'CANCELADO';
          pedidoACambiar = this.pedidoCancelado[pedidoIndex];
        }
      }
    }

    if(isIn === 'PENDIENTE'){
      this.pedidoPendiente = this.pedidoPendiente.filter(el=> el.id !== pedidoACambiar.id);
      if(event.estado === 'CANCELADO'){
        pedidoACambiar.estado = 'CANCELADO';
        this.pedidoCancelado.push(pedidoACambiar as never);
      }else if (event.estado === 'VENDIDO') {
        pedidoACambiar.estado = 'VENDIDO';
        this.pedidoVendido.push(pedidoACambiar as never);
      }else if(event.estado === 'CONFIRMADO'){
        pedidoACambiar.estado === 'CONFIRMADO';
        this.pedidoVendido.push(pedidoACambiar as never);
      }
    }else if(isIn === 'CANCELADO'){
      this.pedidoCancelado = this.pedidoCancelado.filter(el=> el.id !== pedidoACambiar.id);
      if(event.estado === 'PENDIENTE'){
        pedidoACambiar.estado = 'PENDIENTE';
        this.pedidoPendiente.push(pedidoACambiar as never);
      }else if (event.estado === 'VENDIDO') {
        pedidoACambiar.estado = 'VENDIDO';
        this.pedidoVendido.push(pedidoACambiar as never);
      }else if(event.estado === 'CONFIRMADO'){
        pedidoACambiar.estado === 'CONFIRMADO';
        this.pedidoVendido.push(pedidoACambiar as never);
      }
    }else if(isIn === 'CONFIRMADO'){
      this.pedidoConfirmado = this.pedidoConfirmado.filter(el=> el.id !== pedidoACambiar.id);
      if(event.estado === 'PENDIENTE'){
        pedidoACambiar.estado = 'PENDIENTE';
        this.pedidoPendiente.push(pedidoACambiar as never);
      }else if (event.estado === 'VENDIDO') {
        pedidoACambiar.estado = 'VENDIDO';
        this.pedidoVendido.push(pedidoACambiar as never);
      }else if(event.estado === 'CANCELADO'){
        pedidoACambiar.estado === 'CANCELADO';
        this.pedidoCancelado.push(pedidoACambiar as never);
      }
    }
  }

  isCartEmpty():boolean{
    return !this.cartHasItem && this.pedidoCancelado.length === 0 && this.pedidoVendido.length === 0 && this.pedidoConfirmado.length === 0 && this.pedidoPendiente.length === 0;
  }
}
