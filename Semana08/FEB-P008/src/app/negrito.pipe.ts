import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'negrito'
})
export class NegritoPipe implements PipeTransform {

  transform(value: any): string {
    return value['snipet'].replaceAll("span", "b"); 
  }

}
