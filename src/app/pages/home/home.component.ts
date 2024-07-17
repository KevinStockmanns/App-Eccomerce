import { Component, OnInit, Signal } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Resumen, Usuario } from '../../core/models/usuario.model';
import { UsuarioService } from '../../core/services/usuario.service';

import * as Aos from 'aos';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronRight, faLink } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from '../../components/loader/loader.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FontAwesomeModule, RouterModule, LoaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  usuario: Signal<Usuario|null>;
  isLogin: Signal<boolean>;
  isAdmin: Signal<boolean>;
  iconChevron = faChevronRight;
  loading:boolean=false;

  resumen:Resumen|null=null;

  constructor(protected usuarioService: UsuarioService){
    this.usuario = usuarioService.usuario;
    this.isLogin = usuarioService.isLogin;
    this.isAdmin = usuarioService.isAdmin;

    if(this.isAdmin()){
      this.loading=true;
      this.usuarioService.getResumen().subscribe({
        next: res=>{
          this.loading = false;
          this.resumen = res.body;
        },
        error: err=>{
          this.loading=false;
        }
      });
    }
  }

  ngOnInit(): void {
      Aos.init();
  }
}
