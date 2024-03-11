import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

export const activateGuard: CanActivateFn = (route, state) => {
  const servicoAutenticacao = inject(AuthService);
  const router = inject(Router);

  if(servicoAutenticacao.isLogged()) {
    console.log('autenticado');
    return true;
  }else{
    console.log('Não autenticado');
    router.navigate(['/login']);
    return false;
  
  }
};
