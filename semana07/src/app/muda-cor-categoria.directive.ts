import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMudaCorCategoria]'
})
export class MudaCorCategoriaDirective {

  constructor(private elemento: ElementRef, private renderizador: Renderer2) { }
  @HostListener('mouseenter') onMouseEnter(evento: Event){
    this.renderizador.setStyle(this.elemento.nativeElement, 'background-color', 'rgb(81, 131, 7)');
    this.renderizador.setStyle(this.elemento.nativeElement, 'color', 'black');
  }
  @HostListener('mouseleave') onMouseLeave(evento: Event){
    this.renderizador.setStyle(this.elemento.nativeElement, 'background-color', 'greenyellow');
    this.renderizador.setStyle(this.elemento.nativeElement, 'color', 'black');
  }

}
