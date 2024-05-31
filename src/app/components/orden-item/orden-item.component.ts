import { Component, EventEmitter, Input, Output, Signal } from '@angular/core';
import { Orden } from '../../core/models/pedido.model';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { UsuarioService } from '../../core/services/usuario.service';

@Component({
  selector: 'orden-item',
  standalone: true,
  imports: [TitleCasePipe, FontAwesomeModule, CurrencyPipe],
  templateUrl: './orden-item.component.html',
  styleUrl: './orden-item.component.css'
})
export class OrdenItemComponent {

  @Input() orden:Orden|undefined;
  @Output() cambio = new EventEmitter<Orden>();
  iconChevron = faChevronRight;
  iconTrash = faTrash;
  isAdmin: Signal<boolean>;

  constructor(
    private usuarioService: UsuarioService
  ){
    this.isAdmin = usuarioService.isAdmin;
  }

  modificarCantidad(cantidad:number){
    if(this.orden){
      this.orden.cantidad = this.orden.cantidad + cantidad;
      if(this.orden.cantidad < 0)
        this.orden.cantidad = 0;
    }
    this.cambio.emit(this.orden);
  }
  cambiarPrecio(e: FocusEvent){
    if(this.orden && this.orden.precioUnitario){
      this.orden.precioUnitario = (e.target as HTMLInputElement).value as unknown as number;
    }
  }

  delete(){
    if(this.orden){
      this.orden.cantidad = 0;
      this.cambio.emit(this.orden);
    }
  }
}
