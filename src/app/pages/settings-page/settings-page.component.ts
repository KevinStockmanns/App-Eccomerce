import { Component } from '@angular/core';
import { UsuarioService } from '../../core/services/usuario.service';
import { BackBtnComponent } from '../../components/back-btn/back-btn.component';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [BackBtnComponent],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.css'
})
export class SettingsPageComponent {

  constructor(
    private usuarioService: UsuarioService
  ){

  }


  onLogout(){
    this.usuarioService.logout();
  }
}
