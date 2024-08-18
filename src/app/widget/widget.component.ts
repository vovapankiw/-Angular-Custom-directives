import { Component, contentChild, signal, TemplateRef } from '@angular/core';
import { SunIconComponent } from '../sun-icon/sun-icon.component';
import { ButtonComponent } from '../button/button.component';
import { NgTemplateOutlet } from '@angular/common';
import { WidgetContentDirective } from '../directives/widget-content.directive';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [SunIconComponent, ButtonComponent, NgTemplateOutlet],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss',
})
export class WidgetComponent {
  hidden = signal(false);
  content = contentChild(WidgetContentDirective);
}
