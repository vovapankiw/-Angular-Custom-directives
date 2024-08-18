import { Component } from '@angular/core';
import { SunIconComponent } from '../sun-icon/sun-icon.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [SunIconComponent, ButtonComponent],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss',
})
export class WidgetComponent {}
