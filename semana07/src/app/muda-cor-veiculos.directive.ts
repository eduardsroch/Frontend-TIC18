import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMudaCorVeiculos]'
})
export class MudaCorVeiculosDirective {

  constructor(private elemento: ElementRef, private renderizador: Renderer2) { }
  @HostListener('mouseenter') onMouseEnter(evento: Event){
    this.renderizador.setStyle(this.elemento.nativeElement, 'background-color', 'rgb(103, 156, 173)');
    this.renderizador.setStyle(this.elemento.nativeElement, 'color', 'black');
  }
  @HostListener('mouseleave') onMouseLeave(evento: Event){
    this.renderizador.setStyle(this.elemento.nativeElement, 'background-color', 'lightblue');
    this.renderizador.setStyle(this.elemento.nativeElement, 'color', 'black');
  }
}
