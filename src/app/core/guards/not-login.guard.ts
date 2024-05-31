import { CanActivateFn } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { inject } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

export const notLoginGuard: CanActivateFn = (route, state) => {
  const usuarioService: UsuarioService = inject(UsuarioService);
  const pathNoLogeables = [
    ['/login', 'iniciar sesión'],
    ['/signup', 'registrarte']
  ]
  let pag = pathNoLogeables.find(el=> el[0] == state.url);
  if(pag && usuarioService.isLogin()){
    const notification: NotificationService = inject(NotificationService);
    notification.notificate(`No puedes ${pag[1]} porque tienes una sesión abierta.`, {time: 10000, error:true});
    return false;
  }
  return true;
};
