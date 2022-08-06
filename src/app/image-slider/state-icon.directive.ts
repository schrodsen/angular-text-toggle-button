import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[stateIcon]'
})

export class StateIconDirective {

  constructor(private el: ElementRef) {}

  @HostListener('click')
  onClick() {
    this.el.nativeElement.classList.remove("fa-xmark");
    this.el.nativeElement.classList.add("fa-check");
  }
}