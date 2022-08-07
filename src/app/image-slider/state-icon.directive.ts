import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[stateIcon]'
})

export class StateIconDirective {

  constructor(private el: ElementRef) {}

  @HostListener('click', ["$event"])
  onClick(event: any) {
    event.stopPropagation();

    let icon: HTMLElement = this.el.nativeElement.getElementsByTagName('i')[0];
    if (icon !== undefined) {
      if (icon.classList.contains('fa-bookmark')) {
        icon.classList.remove("fa-bookmark");
        icon.classList.add("fa-bookmark-slash");
      } else {
        icon.classList.remove("fa-circle");
        icon.classList.remove("fa-bookmark-slash");
        icon.classList.add("fa-bookmark");
      }
    }
  }
}