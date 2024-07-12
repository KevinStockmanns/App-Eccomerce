import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from '../../../core/models/pedido.model';
import { CartService } from '../../../core/services/cart.service';
import { PedidoItemComponent } from '../../../components/pedido-item/pedido-item.component';
import { LoaderComponent } from '../../../components/loader/loader.component';
import { NotificationService } from '../../../core/services/notification.service';
import { Errors } from '../../../core/models/response-wrapper.model';

@Component({
  selector: 'app-cart-content',
  standalone: true,
  imports: [PedidoItemComponent, LoaderComponent],
  templateUrl: './cart-content.component.html',
  styleUrl: './cart-content.component.css'
})
export class CartContentComponent {

  currentPage:number=0;
  inSite:string = '';
  pedidos:Pedido[]|[]=[];
  loading:boolean = false;
  constructor(
    private activatedRoute:ActivatedRoute,
    private cartService: CartService,
    private noti: NotificationService
  ){  
    this.activatedRoute.paramMap.subscribe({
      next:params=>{
        this.inSite = params.get('estado') as string;

        this.loading = true;
        cartService.getPedidos({estado: this.inSite, page: this.currentPage}).subscribe({
          next: res=>{
            console.log(res);
            if(this.currentPage == 0)
              this.pedidos = res.body.content;
            else
              this.pedidos = [...this.pedidos, ...res.body.content];
            this.loading = false;
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
      }
    })
  }
}
