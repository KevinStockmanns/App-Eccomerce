import { Component, Signal } from '@angular/core';
import { UsuarioService } from '../../core/services/usuario.service';
import { Usuario } from '../../core/models/usuario.model';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faChartLine, faGears, faHome, faShop, faSliders } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'user-nav',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './user-nav.component.html',
  styleUrl: './user-nav.component.css'
})
export class UserNavComponent {
  usuario: Signal<Usuario|null>;
  iconShop = faShop;
  iconPedidos = faCartShopping;
  iconDashboard = faSliders;
  iconMetrics = faChartLine;
  iconConfig = faGears;
  iconHome = faHome;
  totalUnidades: number = 0;
  hidden:boolean = false;

  constructor(
    private usuarioService: UsuarioService,
    private cartService: CartService,
    private router: Router
  ){
    this.usuario = usuarioService.usuario;
    this.cartService.cart.subscribe(el=>{
      this.totalUnidades = el.reduce((ant, act)=> ant + act.versiones.reduce((verAnt, verAct)=> verAnt + verAct.cantidad, 0), 0);
    })

    this.router.events.subscribe(ev=>{
      
      if(ev instanceof NavigationEnd){
        this.hidden = this.controlHidden(ev.url);
      }
    })
  }


  private controlHidden(url:string):boolean{
    const hiddenIn = [
      '/cart/update',
      '/pedido/update',
      '/pedido/confirm',
      '/productos/update',
      '/productos/create',
      '/productos/versiones/images',
      '/cart/confirm',
      "/settings/**",
      "/home", '/'
    ];

    return hiddenIn.some((el) => {
      if (el.endsWith("/**")) {
        const basePath = el.split('/**')[0];
        return url.startsWith(basePath);
      } else {
        return url === el;
      }
  });
  }
}
