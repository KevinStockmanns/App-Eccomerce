import { Component } from '@angular/core';
import { PricesService } from '../../../core/services/prices.service';
import { PriceItemComponent } from '../../../components/price-item/price-item.component';

@Component({
  selector: 'app-prices-selected',
  standalone: true,
  imports: [PriceItemComponent],
  templateUrl: './prices-selected.component.html',
  styleUrl: './prices-selected.component.css'
})
export class PricesSelectedComponent {
  productos;

  constructor(private priceService: PricesService){
    this.productos = priceService.productosSelected;
  }
}
