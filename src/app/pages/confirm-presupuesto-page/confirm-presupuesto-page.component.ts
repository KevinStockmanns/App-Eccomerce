import { Component } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Pedido } from '../../core/models/pedido.model';
import { HeaderComponent } from '../../components/header/header.component';
import {  } from '../../components/orden-item/orden-item.component';
import { CurrencyPipe, Location, TitleCasePipe } from '@angular/common';
import { reubicarItemInCache } from '../../core/interceptor/cache.interceptor';
import { NotificationService } from '../../core/services/notification.service';
import { LoaderComponent } from '../../components/loader/loader.component';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Errors } from '../../core/models/response-wrapper.model';

@Component({
  selector: 'app-confirm-page',
  standalone: true,
  imports: [HeaderComponent, TitleCasePipe, CurrencyPipe, LoaderComponent],
  templateUrl: './confirm-presupuesto-page.component.html',
  styleUrl: './confirm-presupuesto-page.component.css'
})
export class ConfirmPresupuestoPageComponent {
  pedido: Pedido;
  loadingResponse: boolean = false;
  inConfirmPage:boolean = true;
  jsonOrdenes: any[] = [];

  constructor(
    private cartService: CartService,
    private location: Location,
    private notification: NotificationService,
    private activatedRoute:ActivatedRoute,
    protected title: Title
  ){
    this.pedido = cartService.pedidoSelected;
    activatedRoute.url.subscribe(el=> this.inConfirmPage = el[1].path=="confirm");
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
        // updateItemInCache(res.body, 'pedido');
        reubicarItemInCache('/pedido?estado=pendiente', '/pedido?estado=confirmado', this.pedido);
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
  onPresupuesto(){
    this.loadingResponse = true;
    this.cartService.responderPresupuesto(this.pedido.id, this.jsonOrdenes? {ordenes: this.jsonOrdenes} : null).subscribe({
      next: res=>{
        this.loadingResponse = false;
        reubicarItemInCache('/pedido?estado=presupuesto', '/pedido?estado=pendiente', this.pedido);
        this.location.back();
        this.notification.notificate('El presupuesto se respondio con éxito');
      },
      error: err=>{
        this.loadingResponse = false;
        if(err.error.errors)
          err.error.errors.forEach((el: Errors)=>{
            this.notification.notificate(el.error, {error:true, time:7000});
          })
        else
          this.notification.notificate('Ocurrio un error al responder el presupuesto', {error:true});
      }
    });
  }
}
