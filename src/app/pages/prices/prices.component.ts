import { Component, OnInit } from '@angular/core';
import { LoaderComponent } from '../../components/loader/loader.component';
import { BackBtnComponent } from '../../components/back-btn/back-btn.component';
import { Producto, Version } from '../../core/models/producto.model';
import { ProductoService } from '../../core/services/producto.service';
import { NotificationService } from '../../core/services/notification.service';
import { Errors } from '../../core/models/response-wrapper.model';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PricesService } from '../../core/services/prices.service';

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [LoaderComponent, BackBtnComponent, TitleCasePipe, CurrencyPipe, RouterModule],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.css'
})
export class PricesComponent {
  productosSelected;
  
  constructor(
    private priceService:PricesService
  ){
    this.productosSelected = priceService.productosSelected;
  }
  
}
