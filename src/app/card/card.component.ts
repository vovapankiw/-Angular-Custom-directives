import { Component, Input } from '@angular/core';
import { MakeBoldDirective } from '../directives/make-bold.directive';
import { MakeUnderlineDirective } from '../directives/make-underline.directive';
import { MouseEnterDirective } from '../directives/mouse-enter.directive';
import { Card } from '../types/card.type';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MakeBoldDirective, MakeUnderlineDirective, MouseEnterDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() card!: Card;
  hoverEventHandler() {
    console.log('we hover on text');
  }
}
