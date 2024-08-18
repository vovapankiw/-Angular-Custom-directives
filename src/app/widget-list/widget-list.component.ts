import { Component } from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';
import { SunIconComponent } from '../sun-icon/sun-icon.component';
import { ButtonComponent } from '../button/button.component';
import { WidgetContentDirective } from '../directives/widget-content.directive';

@Component({
  selector: 'app-widget-list',
  standalone: true,
  imports: [
    WidgetComponent,
    SunIconComponent,
    SunIconComponent,
    ButtonComponent,
    WidgetContentDirective,
  ],
  templateUrl: './widget-list.component.html',
  styleUrl: './widget-list.component.scss',
})
export class WidgetListComponent {}
