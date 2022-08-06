import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[imageSlider]'
})

export class ImageSliderDirective {

  constructor(private el: ElementRef) {}

  @HostListener('click')
  onClick() {
    var activeOption = document.getElementsByClassName("active");
    if (activeOption.length > 0)
      activeOption[0].classList.remove("active");

    this.el.nativeElement.classList.add("active");
  }
}