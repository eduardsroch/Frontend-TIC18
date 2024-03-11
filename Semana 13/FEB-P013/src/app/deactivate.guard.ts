import { CanDeactivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

export const deactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  const servicoAutenticacao = inject(AuthService);
  const router = inject(Router);
  if(servicoAutenticacao.isLogged()) {
    console.log('autenticado');
    const escolhaDoUsuario = confirm('Deseja sair da pagina?');
    if(escolhaDoUsuario){
      console.log('autenticado em garda-desativar.guard.ts');
      return true;
    }else {
      console.log('false em garda-desativar.guard.ts');
      return false;
    }
  }
  return true;
};
