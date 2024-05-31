import { Component, Signal } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Usuario } from '../../core/models/usuario.model';
import { UsuarioService } from '../../core/services/usuario.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  usuario: Signal<Usuario|null>;

  constructor(private usuarioService: UsuarioService){
    this.usuario = usuarioService.usuario;
  }
}
