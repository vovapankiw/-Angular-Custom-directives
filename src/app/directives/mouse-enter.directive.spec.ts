import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MouseEnterDirective } from './mouse-enter.directive';

@Component({
  standalone: true,
  imports: [MouseEnterDirective],
  template: `<span>Some text</span>`,
})
class TestUnderlineHoverComponent {
  color = 'blue';

  onHover() {
    console.log('hover');
  }
}

describe('MouseenterDirective', () => {
  let component: TestUnderlineHoverComponent;
  let fixture: ComponentFixture<TestUnderlineHoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestUnderlineHoverComponent],
    });
    fixture = TestBed.createComponent(TestUnderlineHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('text should be bold, underline blue, hover event triggered', () => {
    // Getting out element by data attribute
    const getElem = () => fixture.debugElement.query(By.css('[data-test]'));
    // Set spying on hover, state when our component should be changed
    spyOn(component, 'onHover');
    // Dispatching event of hover in test environment
    getElem().nativeElement.dispatchEvent(
      new MouseEvent('mouseenter', {
        view: window,
        bubbles: true,
        cancelable: true,
      })
    );
    fixture.detectChanges();
    // Checking if font is bold
    expect(getElem().nativeElement.style.fontWeight).toBe('bold');
    // Checking if callback have been called
    expect(component.onHover).toHaveBeenCalledTimes(1);
    // Checking if text is decorated (underlined by passed color)
    expect(getElem().nativeElement.style.textDecorationColor).toBe('blue');
  });
});
