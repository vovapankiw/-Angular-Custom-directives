import { Component } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Component({
  selector: 'app-card-description-input',
  standalone: true,
  imports: [],
  templateUrl: './card-description-input.component.html',
  styleUrl: './card-description-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CardDescriptionInputComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: CardDescriptionInputComponent,
    },
  ],
})
export class CardDescriptionInputComponent
  implements ControlValueAccessor, Validator
{
  text = '';
  disabled = false;
  touched = false;

  onChange = (text: string) => {};

  onTouched = () => {};

  writeValue(text: string) {
    this.text = text;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const text = control.value;
    if (text.length <= 0) {
      return {
        mustBePositive: {
          text,
        },
      };
    }

    return null;
  }

  handleTouched() {
    this.markAsTouched();
  }

  handleChange(e: any) {
    this.onChange(e.target.value);
  }
}
