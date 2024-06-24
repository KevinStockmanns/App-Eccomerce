import { Component } from '@angular/core';
import { UsuarioService } from '../../../core/services/usuario.service';
import { BackBtnComponent } from '../../../components/back-btn/back-btn.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [BackBtnComponent, RouterModule, FontAwesomeModule],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.css'
})
export class SettingsPageComponent {

  iconChevron = faChevronDown;
  open:boolean = false;
  constructor(
    private usuarioService: UsuarioService
  ){

  }


  toggleOpen(){
    this.open = !this.open;
  }
  onLogout(){
    this.usuarioService.logout();
  }
}
