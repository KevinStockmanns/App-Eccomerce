import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, catchError, throwError } from 'rxjs';
import { NotificationService } from '../services/notification.service';
import { UsuarioService } from '../services/usuario.service';

export const authInterceptor: HttpInterceptorFn = (req : HttpRequest<any>, next: HttpHandlerFn) => {
  const token = localStorage.getItem('userToken');
  
  if (token) {
    const router: Router = inject(Router);
    const usuarioService: UsuarioService = inject(UsuarioService);
    const notificationService:NotificationService = inject(NotificationService);
    // console.log(router);
    
    
    const reqClone = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });

    return next(reqClone).pipe(
      catchError(err=>{
        if(err.status === 401 && err.error.errors[0].error.startsWith('El token de autenticación ha expirado')){
          
          notificationService.notificate(`El inicio de sesión ha expirado hace ${(err.error.errors[0].error as string).split("hace ")[1]}. Inicia nuevamente.`, {time: 10000, error:true});
          usuarioService.logout();
          return EMPTY;
        }

        return throwError(err);
      })
    );
  }

  return next(req);
}