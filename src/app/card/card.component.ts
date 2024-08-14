import { Component } from '@angular/core';
import { MakeBoldDirective } from '../directives/make-bold.directive';
import { MakeUnderlineDirective } from '../directives/make-underline.directive';
import { MouseEnterDirective } from '../directives/mouse-enter.directive';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MakeBoldDirective, MakeUnderlineDirective, MouseEnterDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  hoverEventHandler() {
    console.log('we hover on text');
  }
}
