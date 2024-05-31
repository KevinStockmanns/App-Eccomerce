import { Component, HostListener, OnDestroy, OnInit, Signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HeaderComponent } from '../../components/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { Orden, Pedido } from '../../core/models/pedido.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrdenItemComponent } from '../../components/orden-item/orden-item.component';
import { CartService } from '../../core/services/cart.service';
import { NotificationService } from '../../core/services/notification.service';
import { Producto, Version } from '../../core/models/producto.model';
import { ProductoService } from '../../core/services/producto.service';
import { CurrencyPipe, Location, TitleCasePipe } from '@angular/common';
import { LoaderComponent } from '../../components/loader/loader.component';
import { updateItemInCache } from '../../core/interceptor/cache.interceptor';
import { UsuarioService } from '../../core/services/usuario.service';

@Component({
  selector: 'app-update-page',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule, OrdenItemComponent, TitleCasePipe, CurrencyPipe, LoaderComponent],
  templateUrl: './update-page.component.html',
  styleUrl: './update-page.component.css'
})
export class UpdatePageComponent implements OnDestroy {
  object: string;
  elemento: Pedido|null = null;
  form: FormGroup;
  cantidadTotal:number = 1;
  productos: Producto[] = [];
  currentPage:number = 0;
  totalPage:number = 0;
  loadingResponse:boolean = false;
  openProductsModal:boolean=false;
  isAdmin: Signal<boolean>;


  constructor(
    private title: Title,
    private activateRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private notification: NotificationService,
    private productoService: ProductoService,
    private location: Location,
    private usuarioService: UsuarioService
  ){
    this.isAdmin = usuarioService.isAdmin;
    this.object = this.activateRoute.snapshot.paramMap.get('object') as string;
    // if(this.object == 'cart'){
      this.title.setTitle('Actualizar Pedido')
      this.elemento = this.cartService.pedidoSelected;
      
      this.form = this.formBuilder.group({
        nombre: [this.elemento?.nombre, [Validators.required]],
        apellido: [this.elemento?.apellido, [Validators.required]],
        correo: [this.elemento?.correo, [Validators.required, Validators.email]],
        telefono: [this.elemento?.telefono, [Validators.required]],
        pais: [this.elemento?.ubicacion.pais, [Validators.required]],
        provincia: [this.elemento?.ubicacion.provincia, [Validators.required]],
        localidad: [this.elemento?.ubicacion.localidad, [Validators.required]],
        barrio: [this.elemento?.ubicacion.barrio, [Validators.required]],
        direccion: [this.elemento?.ubicacion.direccion, [Validators.required]],
        mensaje: [this.elemento?.mensaje, []],
        estado: [this.elemento.estado, [Validators.required, this.permitedEstado]]
      })

      this.form.valueChanges.subscribe(valor=>{
        
        if(this.elemento){
          this.elemento.nombre = valor.nombre;
          this.elemento.apellido = valor.apellido;
          this.elemento.correo = valor.correo;
          this.elemento.telefono = valor.telefono;
          this.elemento.ubicacion.pais = valor.pais;
          this.elemento.ubicacion.provincia = valor.provincia;
          this.elemento.ubicacion.localidad = valor.localidad;
          this.elemento.ubicacion.barrio = valor.barrio;
          this.elemento.ubicacion.direccion = valor.direccion;
          this.elemento.mensaje = valor.mensaje;
          this.elemento.estado = valor.estado;
        }
        
      })
    // }
    
  }

  private permitedEstado(control: any){
    if(control.value !== "PENDIENTE" && control.value !== "CONFIRMADO" && control.value !== 'CANCELADO' && control.value !== 'VENDIDO')
      return {permitedEstado: true};
    return null;
    
  }
  ngOnDestroy(): void {
      this.cartService.setPedidoSelected(null);
  }


  onSubmit(){
    this.form.markAllAsTouched();
    let json = this.form.value;
    
    json.ordenes = []
    if(this.hasOneCambio() && this.cantidadTotal > 0 && this.form.valid){
      this.loadingResponse = true;
      this.elemento?.ordenes.forEach(el=>{
        let ordenOriginal = this.cartService.pedidoSelected.ordenes.find(orden=>orden.id===el.id);
        if(!ordenOriginal && el.cantidad >0){
          json.ordenes.push({accion: 'AGREGAR', idVersion: el.producto.idVersion, cantidad: el.cantidad});
        }else if(ordenOriginal && el.cantidad === 0){
          json.ordenes.push({accion: 'ELIMINAR', idOrden: el.id})
        }else if(ordenOriginal && el.cantidad > 0 && (JSON.stringify(ordenOriginal) !== JSON.stringify(el))){
          let newOrdenUpdate:any = {accion: 'ACTUALIZAR', cantidad: el.cantidad, idOrden: el.id, precioUnitario: el.precioUnitario}
          if(ordenOriginal.precioUnitario === el.precioUnitario){
            delete newOrdenUpdate['precioUnitario'];
          }
          json.ordenes.push(newOrdenUpdate);
        }
      })
      if(JSON.stringify(this.elemento?.ubicacion) !== JSON.stringify(this.cartService.pedidoSelected.ubicacion)){
        json.ubicacion = `${this.elemento?.ubicacion.pais}/-/${this.elemento?.ubicacion.provincia}/-/${this.elemento?.ubicacion.localidad}/-/${this.elemento?.ubicacion.barrio}/-/${this.elemento?.ubicacion.direccion}`;
      }
      delete json.pais;
      delete json.provincia;
      delete json.localidad;
      delete json.barrio;
      delete json.direccion;

      json = this.eliminarElementosVacios(json);
      json = this.elimminarItemsSinCambio(json, this.cartService.pedidoSelected);

      console.log(json);
      
      this.cartService.actualizarPedido(this.elemento?.id as number, json).subscribe({
        next: res=>{
          this.loadingResponse=false;
          updateItemInCache(res.body as any, 'pedido');
          this.location.back();
          this.notification.notificate('Pedido actualizado con éxito.', {error: false});
        }, 
        error: err=>{
          this.loadingResponse = false;
          if(err.status >= 400){
            let msg = err.error?.errors[0].error || 'Ocurrio un error al actualizar el pedido';
            this.notification.notificate(msg, {error: true, time: 5000})
          }else{
            this.notification.notificate('Ocurrio un error al actualizar el pedido', {error: true, time: 5000})
          }
        }
      });
      
    }else{
      if(this.cantidadTotal == 0){
        this.notification.notificate('No se puede actualizar un pedido sin ordenes.', {error: true, time: 5000});
      }else if(!this.hasOneCambio()){
        this.notification.notificate('No se puede actualizar ya que no hay cambios.', {error: true, time: 5000});
      }
    }
  }

  onCambioElemento(orden:Orden){
    // if(this.elemento && this.elemento.ordenes){
    //   let i = this.elemento.ordenes.findIndex(el=> el.id === orden.id);
    //   if(i!== -1)
    //     this.elemento.ordenes[i] = orden;
    // }
    this.elemento?.ordenes.forEach(or=>{
      if(this.elemento && or.cantidad === 0 && this.cartService.pedidoSelected.ordenes.find(el=> el.producto.idVersion ==or.producto.idVersion) == undefined)
        this.elemento.ordenes = this.elemento?.ordenes.filter(el=> el.producto.idVersion !== or.producto.idVersion);
    })
    this.cantidadTotal = this.elemento?.ordenes.reduce((ant, ord)=> ant+ ord.cantidad, 0) || 0;
  }

  hasOneCambio():boolean{
    return JSON.stringify(this.elemento) !== JSON.stringify(this.cartService.pedidoSelected);
  }


  openProducts(){
    if(this.productos.length == 0){
      this.loadingResponse = true;
      this.openProductsModal = true;
      this.productoService.getProductos({page: this.currentPage}).subscribe({
        next: res=>{
          this.productos = res.body.content;
          this.loadingResponse = false;
          this.totalPage = res.body.totalPages
        },
        error: err=>{
          this.notification.notificate('No se pudo obtener los productos. Intentalo más tarde.', {error: true})
          this.loadingResponse = false;
          this.openProductsModal = false;
        }
      })
    }else{
      this.openProductsModal = true;
    }
  }
  addProduct(producto: Producto, version: Version){
    let inPedido = this.elemento?.ordenes.find(el=> el.producto.idVersion == version.id);
    if(inPedido == undefined){
      let newOrden: Orden = {
        cantidad: 1,
        id: 0,
        precioUnitario: version.precio,
        producto: {
          idProducto: producto.id,
          idVersion: version.id,
          nombreProducto: producto.nombre,
          nombreVersion: version.nombre
        },
        conDescuento: null
      }
      this.elemento?.ordenes.push(newOrden);
      this.cantidadTotal = this.elemento?.ordenes.reduce((ant, orden)=> ant + orden.cantidad, 0) as number;
    }
  }
  isInPedido(idVersion:number):boolean{
    return this.elemento?.ordenes.find(el=> el.producto.idVersion == idVersion) !== undefined;
  }

  cancelarUpdate(){
    this.location.back();
  }

  @HostListener('document:keydown', ['$event'])
  onKeyEsc(e: KeyboardEvent){
    if(e.code === 'Escape')
      this.openProductsModal = false;
  }


  eliminarElementosVacios(element:any):any{
    for(const prop in element){
      if(element[prop] === null || element[prop] === '' || element[prop].length === 0)
        delete element[prop];
    }
    return element;
  }
  elimminarItemsSinCambio(element:any, elementOriginal:any){
    for(const item in element){
      if(element[item] === elementOriginal[item])
        delete element[item];
    }
    return element;
  }


  hasOneError(controlName:string){
    return this.form?.get(controlName)?.invalid && this.form?.get(controlName)?.touched;
  };
  hasValue(controlName:string){
    return this.form?.get(controlName)?.value;
  }
  hasError(controlName: string, error:string){
    return this.form?.get(controlName)?.hasError(error) && this.form?.get(controlName)?.touched;
  }
}
