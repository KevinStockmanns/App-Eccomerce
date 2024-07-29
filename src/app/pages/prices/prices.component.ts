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

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [BackBtnComponent, TitleCasePipe, CurrencyPipe, RouterModule, ReactiveFormsModule],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.css'
})
export class PricesComponent {
  productosSelected;
  inPage:string = '';
  porcentaje:FormControl<number|null>;

  constructor(
    private priceService:PricesService, 
    private router: Router
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
}
