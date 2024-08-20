import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { BadgeStatusDirective } from './directives/badge-status.directive';
import { of } from 'rxjs';
import { SelectDirective } from './select.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardListComponent,
    BadgeStatusDirective,
    RouterLink,
    SelectDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'custom-directives';

  // source = of(['Vova']);
  source = {
    load: () => Promise.resolve(['s', 'd']),
  };
}
