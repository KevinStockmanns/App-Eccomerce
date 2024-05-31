import { CanActivateFn, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { inject } from '@angular/core';
import { NotificationService } from '../services/notification.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const usuarioService: UsuarioService = inject(UsuarioService);
  const router: Router = inject(Router);
  const notification: NotificationService = inject(NotificationService);

  if(!usuarioService.isLogin()){    

    router.navigate(['/login']);
    notification.notificate(`Para ingresar a la pagina '${state.url}' debes iniciar sesión`, {time:10000, error:true})
    return false;
  }
  return true;
};
