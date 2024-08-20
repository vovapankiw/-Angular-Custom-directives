import { Component } from '@angular/core';
import { ConditionalRenderDirective } from '../conditional-render.directive';
import { CommonModule, NgIf, NgTemplateOutlet } from '@angular/common';
import { ConditionElseDirective } from '../condition-else.directive';

@Component({
  selector: 'app-condition',
  standalone: true,
  imports: [
    ConditionalRenderDirective,
    ConditionElseDirective,
    NgIf,
    NgTemplateOutlet,
  ],
  templateUrl: './condition.component.html',
  styleUrl: './condition.component.scss',
})
export class ConditionComponent {
  booleanValue = false;

  name = 'Vava';
}
