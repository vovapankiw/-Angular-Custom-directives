import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CardDescriptionInputComponent } from '../card-description-input/card-description-input.component';

type CardForm = {
  title: FormControl<string>;
  description: FormControl<string>;
};

@Component({
  selector: 'app-new-card',
  standalone: true,
  imports: [ReactiveFormsModule, CardDescriptionInputComponent],
  templateUrl: './new-card.component.html',
  styleUrl: './new-card.component.scss',
})
export class NewCardComponent {
  form = new FormGroup<CardForm>({
    title: new FormControl('', { nonNullable: true }),
    description: new FormControl('', { nonNullable: true }),
  });

  handleFormSubmit() {
    console.log('form submit', this.form.value);
  }
}
