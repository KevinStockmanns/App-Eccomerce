import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from '../../../core/models/pedido.model';
import { CartService } from '../../../core/services/cart.service';
import { PedidoItemComponent } from '../../../components/pedido-item/pedido-item.component';
import { LoaderComponent } from '../../../components/loader/loader.component';
import { NotificationService } from '../../../core/services/notification.service';
import { Errors } from '../../../core/models/response-wrapper.model';
import { UsuarioService } from '../../../core/services/usuario.service';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-cart-content',
  standalone: true,
  imports: [PedidoItemComponent, LoaderComponent, FontAwesomeModule],
  templateUrl: './cart-content.component.html',
  styleUrl: './cart-content.component.css'
})
export class CartContentComponent{

  currentPage:number=0;
  inSite:string = '';
  pedidos:Pedido[]|[]=[];
  loading:boolean = false;
  iconInfo = faExclamationCircle;

  constructor(
    private activatedRoute:ActivatedRoute,
    private cartService: CartService,
    private noti: NotificationService,
    protected usuarioService: UsuarioService
  ){  
    this.activatedRoute.paramMap.subscribe({
      next:params=>{
        if(this.inSite != params.get('estado'))
          this.currentPage = 0;
        this.inSite = params.get('estado') as string;
        // console.log(this.currentPage);
        

        this.loading = true;
        cartService.getPedidos({estado: this.inSite, page: this.currentPage}).subscribe({
          next: res=>{
            if(this.currentPage == 0)
              this.pedidos = res.body.content;
            else
              this.pedidos = [...this.pedidos, ...res.body.content];
            this.loading = false;
            if(this.currentPage<res.body.totalPages-1)
              this.currentPage++;
          },
          error: err=>{
            this.loading = false;
            if(err.error?.errors){
              err.error.errors.forEach((el:Errors)=>{
                noti.notificate(el.error, {error:true, time: 7000});
              })
            }else{
              noti.notificate('Ocurrio un error al cargar los pedidos', {error:true});
            }
          }
        });

        this.pedidos = this.pedidos.filter(el=>el.estado==this.inSite.toUpperCase());
      }
    })
  }


  onCambioPedido(pedido:Pedido){
    if(this.pedidos.find(el=>el.id==pedido.id)){
      this.pedidos = this.pedidos.filter(el=>el.estado.toUpperCase() == this.inSite.toUpperCase());
    }
  }
}
