import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { BadgeStatusDirective } from './directives/badge-status.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardListComponent, BadgeStatusDirective, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'custom-directives';
}
