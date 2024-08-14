import { Directive } from '@angular/core';
import { MakeBoldDirective } from './make-bold.directive';
import { MakeUnderlineDirective } from './make-underline.directive';

@Directive({
  selector: '[makeBoldAndUnderline]',
  standalone: true,
  hostDirectives: [
    {
      directive: MakeBoldDirective,
      outputs: ['hover: boldHoverEvent'],
    },
    {
      directive: MakeUnderlineDirective,
      inputs: ['color: underlineColor'],
    },
  ],
})
export class MouseEnterDirective {}
