import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const estadoValidoCartGuard: CanActivateFn = (route, state) => {
  const estadosValidos = ['vendido', 'cancelado', 'pendiente', 'confirmado', 'presupuesto'];
  if(estadosValidos.includes(route.paramMap.get('estado') as string))
    return true;

  let router = inject(Router);
  router.navigate(['/error']);
  return false;
};
