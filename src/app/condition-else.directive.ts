import {
  Directive,
  inject,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[conditionElse]',
  standalone: true,
})
export class ConditionElseDirective {
  protected readonly templateRef = inject(TemplateRef<any>);
  protected readonly viewContainer = inject(ViewContainerRef);

  @Input({ required: true }) conditionElse!: boolean;
  @Input() conditionElseOther!: TemplateRef<any>;
  @Input() conditionElseSomeData: any; // To hold 'someData'

  ngOnChanges() {
    this.viewContainer.clear();

    if (this.conditionElse) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        name: this.conditionElseSomeData + ' ' + 'suffix',
      });
    } else {
      // Create the else view
      this.viewContainer.createEmbeddedView(this.conditionElseOther, {
        fallback: true, // Alias for fallback
      });
    }
  }
}
