import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

export const superadminGuard: CanActivateFn = (route, state) => {
  const usuarioService: UsuarioService = inject(UsuarioService);
  return usuarioService.usuario()?.rol === 'SUPERADMIN';
};
