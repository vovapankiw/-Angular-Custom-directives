import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[makeUnderline]',
  standalone: true,
})
export class MakeUnderlineDirective {
  @Input() color = 'black';

  constructor(private hostElement: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hostElement.nativeElement.style.textDecoration = 'underline dotted';
    this.hostElement.nativeElement.style.textDecorationColor = this.color;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hostElement.nativeElement.style.textDecoration = 'none';
    this.hostElement.nativeElement.style.textDecorationColor = 'none';
  }
}
