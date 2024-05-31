import { Component, HostListener, Signal } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ProductoService } from '../../core/services/producto.service';
import { ProductClientCardComponent } from '../../components/product-card/product-card.component';
import { Producto } from '../../core/models/producto.model';
import { CartComponent } from '../../components/cart/cart.component';
import { UsuarioService } from '../../core/services/usuario.service';
import { ProductAdminCardComponent } from '../../components/product-admin-card/product-admin-card.component';
import { RouterModule } from '@angular/router';
import { NotificationService } from '../../core/services/notification.service';
import { Errors, ResponseWrapper } from '../../core/models/response-wrapper.model';
import { faLock, faLockOpen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import { LoaderComponent } from '../../components/loader/loader.component';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [HeaderComponent, ProductClientCardComponent, CartComponent, ProductAdminCardComponent, RouterModule, FontAwesomeModule, LoaderComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {
  
  productos: Producto[]|undefined;
  productosByEstado:boolean=false;
  loading = false;
  page = 0;
  size = 10;
  totalPage = 0;
  isLogin: Signal<boolean>;
  isAdmin: Signal<boolean>;
  iconTrash = faLock;
  iconProd = faLockOpen;
  iconPlus = faPlus;
  

  constructor(private productoService: ProductoService, protected usuarioService: UsuarioService,
    private noti: NotificationService
  ){
    this.isLogin = usuarioService.isLogin;
    this.isAdmin = usuarioService.isAdmin;
  }
  

  ngOnInit(){
    this.loading = true;
    this.loadMoreProducts(true, true);
  }


  loadMoreProducts(estado:boolean, isFirst:boolean){
    this.page = isFirst ? 0 : this.page;
    if(isFirst)
      this.productosByEstado = !this.productosByEstado;
    this.productoService.getProductos({estado, page: this.page, sort:'ASC'}).subscribe({
      next: res=>{
        if(isFirst)
          this.productos = res.body.content;
        else
          this.productos = this.productos?.concat(res.body.content);

        this.totalPage = res.body.totalPages;
        this.page++;
        this.loading = false;
      },
      error: err=>{
        if(err.error?.errors?.length>0){
          err.error.errors.forEach((el:Errors)=>{
            this.noti.notificate(el.error, {error:true});
          })
        }else{
          this.noti.notificate('Ocurrio un error al cargar los productos', {error:true});
        }
        this.loading = false;
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  controlScroll(){
    if(window.innerHeight + window.scrollY+1 >= document.body.offsetHeight && (this.page < this.totalPage)){
      this.loadMoreProducts(this.productosByEstado, false);
    }
  }
}
