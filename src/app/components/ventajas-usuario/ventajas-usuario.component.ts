import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'usuario-beneficios',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './ventajas-usuario.component.html',
  styleUrl: './ventajas-usuario.component.css'
})
export class VentajasUsuarioComponent {
  isInRegister: boolean = false;

  constructor(private router: Router){
    this.isInRegister = this.router.url === '/signup';
  }
}
