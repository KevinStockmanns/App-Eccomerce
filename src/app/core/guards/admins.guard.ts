import { CanActivateFn, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { inject } from '@angular/core';
import { NotificationService } from '../services/notification.service';

export const adminsGuard: CanActivateFn = (route, state) => {
  const usuarioService: UsuarioService = inject(UsuarioService);
  const router: Router = inject(Router);
  const notifcation: NotificationService = inject(NotificationService);

  if(usuarioService.usuario()?.rol === "ADMIN" || usuarioService.usuario()?.rol === 'SUPERADMIN'){
    return true;
  }

  router.navigate(['/productos']);
  notifcation.notificate(`No tienes los permisos necesarios para ingresar a la página '${state.url}'`, {time: 10000, error:true});

  return false;
};
