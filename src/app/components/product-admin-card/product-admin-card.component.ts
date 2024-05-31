import { Component, Input } from '@angular/core';
import { Producto } from '../../core/models/producto.model';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { DateFormatPipe } from '../../core/pipe/date-format.pipe';
import { ProductoService } from '../../core/services/producto.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'product-admin-card',
  standalone: true,
  imports: [TitleCasePipe, CurrencyPipe, DateFormatPipe, RouterModule],
  templateUrl: './product-admin-card.component.html',
  styleUrl: './product-admin-card.component.css'
})
export class ProductAdminCardComponent {
  @Input() producto: Producto|undefined;

  constructor(
    private productoService: ProductoService
  ){

  }

  actualizar(){
    this.productoService.setProductoSelected(this.producto as Producto);
  }
}
