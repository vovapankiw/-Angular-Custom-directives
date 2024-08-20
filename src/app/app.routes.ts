import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewCardComponent } from './new-card/new-card.component';
import { CardListComponent } from './card-list/card-list.component';
import { WidgetComponent } from './widget/widget.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { ConditionComponent } from './condition/condition.component';

export const routes: Routes = [
  {
    path: 'cards',
    component: CardListComponent,
  },
  {
    path: 'add-new-card',
    component: NewCardComponent,
  },
  {
    path: 'projection',
    component: WidgetListComponent,
  },
  {
    path: 'condition',
    component: ConditionComponent,
  },
];
