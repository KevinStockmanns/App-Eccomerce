import { Component, ElementRef, HostListener, Signal, ViewChild } from '@angular/core';
import { UsuarioService } from '../../core/services/usuario.service';
import { faCartShopping, faChevronUp, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductoCart } from '../../core/models/producto.model';
import { CartService } from '../../core/services/cart.service';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationService } from '../../core/services/notification.service';
import { Provincia } from '../../core/models/ubicacion.model';
import { UbicacionService } from '../../core/services/ubicacion.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FontAwesomeModule, CurrencyPipe, ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  isLogin: Signal<boolean>;
  iconCart = faCartShopping;
  iconChevron = faChevronUp;
  iconTrash = faTrash;
  inCartSite: boolean = false;
  inFormPart:boolean = false;
  isOpen: boolean = false;
  loading: boolean = false;
  error: string[]=[];
  cart: ProductoCart[] = [];
  totalUnidades:number = 0;
  totalPrecio:number = 0;
  @ViewChild('cartComponent') cartElement: ElementRef|undefined;
  form: FormGroup;
  privincias: Provincia[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private cartService: CartService,
    private router: Router,
    private formBuilder: FormBuilder,
    private notification: NotificationService
  ){
    this.isLogin = this.usuarioService.isLogin;
    this.inCartSite = router.url === '/cart';
    this.isOpen = this.inCartSite;
    this.form = this.formBuilder.group({
      nombre: [this.usuarioService.usuario()?.nombre || '', [Validators.required, Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]+'), Validators.minLength(3), Validators.maxLength(50)]],
      apellido: [this.usuarioService.usuario()?.apellido || '', [Validators.required, Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]+'), Validators.minLength(3), Validators.maxLength(70)]],
      correo: [this.usuarioService.usuario()?.correo || '', [Validators.required, Validators.email]],
      telefono: [this.usuarioService.usuario()?.telefono || '', [Validators.required, Validators.pattern('(\\+\\d{2,4})?\\s?\\d{3,4}\\s\\d{6,8}')]],
      mensaje: ['', [Validators.pattern('[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\\s\\S\\.]+'), Validators.minLength(20), Validators.maxLength(2000)]],
      pais: [this.usuarioService.usuario()?.ubicacion.pais || '', [Validators.required]],
      provincia: [this.usuarioService.usuario()?.ubicacion.provincia || '', [Validators.required]],
      localidad: [this.usuarioService.usuario()?.ubicacion.localidad || '', [Validators.required]],
      barrio: [this.usuarioService.usuario()?.ubicacion.barrio || '', [Validators.required]],
      direccion: [this.usuarioService.usuario()?.ubicacion.direccion || '', [Validators.required]]
    });
    
    this.cartService.cart.subscribe(el=>{
      this.cart = el;
      this.totalUnidades = 0;
      this.totalUnidades = el.reduce((prev, act)=> 
        prev + act.versiones.reduce((verAnt, verAct) => verAnt + verAct.cantidad, 0), 0
      );
      this.totalPrecio = el.reduce((ant, act)=> ant + act.versiones.reduce((antVer, actVer)=> antVer + (actVer.cantidad * actVer.precio), 0), 0);
    });
  }


  onSubmit(){
    this.error = [];
    
    if(this.inFormPart){
      this.form.markAllAsTouched();
      let json = this.form.value;
      json.ubicacion = `${json.pais}/-/${json.provincia}/-/${json.localidad}/-/${json.barrio}/-/${json.direccion}`
      delete json.pais;
      delete json.provincia;
      delete json.localidad;
      delete json.barrio;
      delete json.direccion;
      
      for(const prop in json){
        if(json[prop]=== "")
          delete json[prop];
      }
      console.log(json);
      
      
      let versionesJson: any[]=[];
      if(json.mensaje == '') delete json.mensaje;
      this.cart.forEach(prod=> {
        prod.versiones.forEach(ver=> versionesJson.push({idVersion: ver.id, cantidad: ver.cantidad}))
      })

      if(versionesJson.length >0 && this.form.valid){
        this.loading = true;
        json.ordenes = versionesJson;
        this.cartService.doPedido(json).subscribe({
          next: res=>{
            this.notification.notificate('Pedido realizado existosamente.', {time:5000})
            this.loading = false;
          },
          error: err=>{
            console.log(err.error.errors[0].error );
            this.loading = false;
            err.error?.errors?.forEach((el: {error:string})=>{
              this.error.push(el.error);
              this.notification.notificate(el.error, {error:true});
            })
            
          }
        });
        
      }else{
        this.form.markAllAsTouched();
        if(versionesJson.length == 0)
          this.error.push("Para realizar un pedido debes agregar ordenes.");
      }
      console.log(json);

    }else{
      this.inFormPart = true;
    }
  }



  @HostListener('document:click', ['$event'])
  closeCart(e:Event){
    let target: HTMLElement = e.target as HTMLElement;
    if(!this.cartElement?.nativeElement.contains(target) && !this.inCartSite){
      this.isOpen = false;
    }
  }


  getIndex(prodIndex: number, verIndex: number): number {
    let totalIndex = 0;
    for (let i = 0; i < prodIndex; i++) {
      totalIndex += this.cart[i].versiones.length;
    }
    return totalIndex + verIndex + 1;
  }

  hasError(controlName: string, error: string){
    return this.form.get(controlName)?.hasError(error) && this.form.get(controlName)?.touched;
  }
  hasOneError(controlName:string){
    return this.form.get(controlName)?.invalid && this.form.get(controlName)?.touched;
  }
  hasValue(controlName:string){
    return this.form.get(controlName)?.value;
  }
  getError(controlName:string, error:string):any{
    return (this.form.get(controlName)?.errors as any)[error];
  }


  addVersion(producto:ProductoCart, idVersion:number){
    this.cartService.addVersion(producto, idVersion);
  }
  deleteVersion(producto:ProductoCart, idVersion:number){
    this.cartService.removeVersion(producto, idVersion);
  }
  removeItem(producto:ProductoCart, idVersion:number){
    this.cartService.removeItem(producto, idVersion);
  }
  resetCart(){
    this.cartService.resetCart();
    this.isOpen= false;
  }
  toggleOpen(){
    this.isOpen = !this.isOpen;
  }
}
