import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcularIdade'
})
export class IdadePipe implements PipeTransform {

  transform(dataNascimento: string): string {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    const diffMeses = (hoje.getFullYear() - nascimento.getFullYear()) * 12 + hoje.getMonth() - nascimento.getMonth();
    return diffMeses + ' meses';
  }

}
