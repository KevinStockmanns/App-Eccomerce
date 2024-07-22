import { Component, ElementRef, EventEmitter, HostListener, Input, Output, Signal, SimpleChanges, ViewChild } from '@angular/core';
import { Pedido } from '../../core/models/pedido.model';
import { DateFormatPipe } from '../../core/pipe/date-format.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Producto } from '../../core/models/producto.model';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { DateTimeFormatPipe } from '../../core/pipe/date-time-format.pipe';
import { Usuario } from '../../core/models/usuario.model';
import { UsuarioService } from '../../core/services/usuario.service';
import { NotificationService } from '../../core/services/notification.service';
import { CartService } from '../../core/services/cart.service';
import { LoaderComponent } from '../loader/loader.component';
import { RouterModule } from '@angular/router';
import { reubicarItemInCache } from '../../core/interceptor/cache.interceptor';

@Component({
  selector: 'pedido-item',
  standalone: true,
  imports: [DateFormatPipe, FontAwesomeModule, TitleCasePipe, CurrencyPipe, DateTimeFormatPipe, DateFormatPipe, LoaderComponent, RouterModule],
  templateUrl: './pedido-item.component.html',
  styleUrl: './pedido-item.component.css'
})
export class PedidoItemComponent {
  @Input() pedido: Pedido|undefined;
  @Output() cambioPedido = new EventEmitter<Pedido>();
  @ViewChild('pedidoItem') element: ElementRef|undefined;
  iconChevron = faChevronDown;
  iconPedido = faShoppingCart;
  open:boolean = false;
  detailsOpen:boolean = false;
  loadingResponse:boolean = false;
  total: number = 0;
  usuario: Signal<Usuario|null>;
  isAdmin: Signal<boolean>
 
  constructor(private usuarioService: UsuarioService, private modal: NotificationService,
      private cartService: CartService
  ){
    this.usuario = usuarioService.usuario;
    this.isAdmin = usuarioService.isAdmin;
  }
  
  
  ngOnChanges(changes: SimpleChanges){
    if(changes['pedido']){
      this.total = this.pedido?.ordenes.reduce((prev, ordAct)=> prev + (ordAct.cantidad * (ordAct.precioUnitario||0)), 0) as number;
    }
  }
  togglePedido(){
    this.open = !this.open;
  }
  toggleOpenDetails(){
    console.log(!this.detailsOpen);
    
    this.detailsOpen = !this.detailsOpen;
  }
  @HostListener('document:click', ['$event'])
  closePedido(e: Event){
    let target: HTMLElement = e.target as HTMLElement;
    if(!this.element?.nativeElement.contains(target) && !target.closest('.no-close-others')){
      // console.log("cerrar pedido", this.pedido?.fecha);
      // console.log(this.open);
      
      this.open = false;
    }
  }


  cambioEstadoFn(estado: string){
    let title = '¿Seguro que desea cancelar el pedido?';
    let msg = "El pedido se marcara como 'cancelado'. Por lo que no se realizaran los productos solicitados.";
    let motivate = false;
    if(estado === 'PENDIENTE'){
      title = '¿Desea continuar?';
      msg = "El pedido volvera al estado 'pendiente', pero si ha pasado mucho tiempo es posible que se apliquen precios actualizados.";
      motivate = true;
    }
    this.modal.openModal({title: title, desc: msg, motivate: motivate}).subscribe({
      next: res=> {
        if(res){
          this.loadingResponse = true;
          if(estado === 'CANCELADO'){
            this.cartService.cancelPedido(this.pedido?.id as number).subscribe({
              next: res=> {
                this.loadingResponse = false;
                reubicarItemInCache(`/pedido?estado=${this.pedido?.estado.toLowerCase()}`, `/pedido?estado=${estado.toLowerCase()}`, this.pedido);
                if(this.pedido)
                  this.pedido.estado = estado;
                this.cambioPedido.emit(this.pedido);
              },
              error: err=>{
                let msg = err.error.errors[0].error || 'Ocurrio un error al cancelar el pedido';
                this.modal.notificate(msg, {error:true, time:0});
                this.loadingResponse = false;
              }
            })
          }else if(estado === 'PENDIENTE'){
            this.cartService.reactivarPedido(this.pedido?.id as number).subscribe({
              next: res=>{
                this.modal.notificate('El pedido se reactivo con éxito', {});
                reubicarItemInCache(`/pedido?estado=${this.pedido?.estado.toLowerCase()}`, `/pedido?estado=${estado.toLowerCase()}`, this.pedido);
                if(this.pedido)
                  this.pedido.estado = estado;
                this.loadingResponse = false
                this.cambioPedido.emit(this.pedido);
              },
              error: err=>{
                this.modal.notificate('No se pudo reactivar el pedido', {error:true});
                this.loadingResponse = false;
              }
            });
          }
        }
      }
    })
  }

  onUpdate(){
    this.cartService.setPedidoSelected(this.pedido as Pedido);
  }

  confirmPedido(){
    this.cartService.setPedidoSelected(this.pedido as Pedido);
  }
  onPresupuesto(){
    this.cartService.setPedidoSelected(this.pedido as Pedido);
  }


  stringify(object:any): string{
    return JSON.stringify(object);
  }
}
