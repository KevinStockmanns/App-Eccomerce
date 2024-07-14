import { CanActivateFn } from '@angular/router';

export const urlValidGuard: CanActivateFn = (route, state) => {
  return true;
};
