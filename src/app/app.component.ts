import { Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UsuarioService } from './core/services/usuario.service';
import { UserNavComponent } from './components/user-nav/user-nav.component';
import { NotificationComponent } from './components/notification/notification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserNavComponent, NotificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLoggin: Signal<boolean>;


  constructor(private usuarioService: UsuarioService){
    this.isLoggin = usuarioService.isLogin;
  }
}
