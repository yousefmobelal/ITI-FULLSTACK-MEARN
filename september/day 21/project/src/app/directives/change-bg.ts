import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeBg]',
})
export class ChangeBg {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#A8F1FF');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
