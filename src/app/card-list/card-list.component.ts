import { Component } from '@angular/core';
import { generateCards } from '../utils/cards-generator';
import { NgFor, SlicePipe } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { ObserveElementDirective } from '../directives/observe-element.directive';

const DEFAULT_ITESM_VIEW = 16;

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [NgFor, CardComponent, ObserveElementDirective, SlicePipe],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent {
  cards = generateCards(100);
  endIndex = DEFAULT_ITESM_VIEW;

  isIntersecting(isIntersecting: boolean) {
    console.log(isIntersecting);
    if (isIntersecting) {
      this.endIndex += DEFAULT_ITESM_VIEW;
    }
    // console.log('intersecting', index, isIntersecting);
    // if (index + 1 >= this.endIndex && isIntersecting) {
    //   this.endIndex += DEFAULT_ITESM_VIEW;
    // }
  }
}
