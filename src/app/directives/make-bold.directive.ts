import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[makeBold]',
  standalone: true,
})
export class MakeBoldDirective {
  @Output() hover = new EventEmitter();

  constructor(private hostElement: ElementRef) {}

  @HostListener('mouseenter', ['$event']) onMouseEnter(e: MouseEvent) {
    this.hostElement.nativeElement.style.fontWeight = 'bold';
    this.hover.emit();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hostElement.nativeElement.style.fontWeight = 'normal';
  }
}
