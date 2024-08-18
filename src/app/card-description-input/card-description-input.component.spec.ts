import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDescriptionInputComponent } from './card-description-input.component';

describe('CardDescriptionInputComponent', () => {
  let component: CardDescriptionInputComponent;
  let fixture: ComponentFixture<CardDescriptionInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDescriptionInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDescriptionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
