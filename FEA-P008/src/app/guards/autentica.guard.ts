import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AutenticaService } from '../autentica.service';

export const autenticaGuard: CanActivateFn = (route, state) => {

  const autenticaService = inject(AutenticaService);
  const router = inject(Router);

  if (autenticaService.isLoggedIn()) {
    return true;
  } else {
    console.log("não logado")
    router.navigate(['/login']);
    return false;
  }
};
