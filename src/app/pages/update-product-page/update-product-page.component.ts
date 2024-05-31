import { Component } from '@angular/core';
import { LoaderComponent } from '../../components/loader/loader.component';
import { BackBtnComponent } from '../../components/back-btn/back-btn.component';
import { Producto } from '../../core/models/producto.model';
import { ProductoService } from '../../core/services/producto.service';
import { IMG_URL } from '../../core/constants';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-product-page',
  standalone: true,
  imports: [LoaderComponent, BackBtnComponent],
  templateUrl: './update-product-page.component.html',
  styleUrl: './update-product-page.component.css'
})
export class UpdateProductPageComponent {
 
}
