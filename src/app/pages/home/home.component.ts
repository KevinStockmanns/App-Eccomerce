import { Component, OnInit, Signal } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Usuario } from '../../core/models/usuario.model';
import { UsuarioService } from '../../core/services/usuario.service';

import * as Aos from 'aos';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronRight, faLink } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FontAwesomeModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  usuario: Signal<Usuario|null>;
  isLogin: Signal<boolean>;
  iconChevron = faLink;

  constructor(protected usuarioService: UsuarioService){
    this.usuario = usuarioService.usuario;
    this.isLogin = usuarioService.isLogin;
  }

  ngOnInit(): void {
      Aos.init();
  }
}
