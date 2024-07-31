import { Component, OnInit } from '@angular/core';
import { LoaderComponent } from '../../components/loader/loader.component';
import { BackBtnComponent } from '../../components/back-btn/back-btn.component';
import { Producto, Version } from '../../core/models/producto.model';
import { ProductoService } from '../../core/services/producto.service';
import { NotificationService } from '../../core/services/notification.service';
import { Errors } from '../../core/models/response-wrapper.model';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { PricesService } from '../../core/services/prices.service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { getCacheItems, setCacheItems } from '../../core/interceptor/cache.interceptor';

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [BackBtnComponent, TitleCasePipe, CurrencyPipe, RouterModule, ReactiveFormsModule, LoaderComponent],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.css'
})
export class PricesComponent {
  productosSelected;
  inPage:string = '';
  porcentaje:FormControl<number|null>;
  loading:boolean = false;

  constructor(
    private priceService:PricesService, 
    private router: Router,
    private noti:NotificationService
  ){
    this.productosSelected = priceService.productosSelected;
    this.router.events.subscribe(el=>{
      if(el instanceof NavigationEnd){
        this.inPage = el.url.substring( el.url.lastIndexOf('/')+1);
      }
    })

    this.porcentaje = new FormControl(null, [Validators.required]);

    this.porcentaje.valueChanges.subscribe(porc=>{
      if(porc && porc!=0){
        this.priceService.newPrecio(porc);
      }
      
    })
  }
  


  clearSelection(){
    if(this.inPage == 'selected')
      this.router.navigate(['/precios/select'])
    this.priceService.clearSelection();
  }


  onSubmit(){
    this.noti.openModal({
      title: '¿Desea continuar?',
      desc: 'Presiona aceptar si quieres continuar o cancelar si no quieres hacerlo.',
      motivate: true
    }).subscribe({
      next: modal=>{
        
        if(modal){
          this.loading = true;
          this.priceService.commitPrices().subscribe({
            next:res=>{
              this.loading=false;
              let dataCache = getCacheItems('/producto');
              this.productosSelected().forEach(el=>{
                dataCache?.forEach((val,key)=>{
                  val.response.body.content.forEach((p:Producto)=>{
                    p.versiones.forEach(v=>{
                      if(v.id == el.id){
                        if(el.hasOwnProperty('precio') && el.precio){
                          v.precio = el.precioNuevo as number;
                        }
                        if(el.hasOwnProperty('precioDescuento') && el.precioDescuento){
                          v.precioDescuento = el.precioDescuentoNuevo as number;
                        }
                      }
                    });
                  });
                });
              })
              setCacheItems(dataCache);
              this.priceService.clearSelection();
              this.router.navigate(['/productos']);
              this.noti.notificate('Precios actualizados con éxito');
            },
            error: err=>{
              this.loading = false;
              if(err.error.errors){
                err.error.errors.forEach((el:Errors)=>{
                  this.noti.notificate(el.error, {error:true, time:7000});
                })
              }else{
                this.noti.notificate('Ocurrio un error al actualizar los precios', {error:true});
              }
            }
          });
        }
      }
    })
  }
}
