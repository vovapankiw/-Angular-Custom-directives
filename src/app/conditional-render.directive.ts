import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core';

@Directive({
  selector: '[conditionalRender]',
  standalone: true,
})
export class ConditionalRenderDirective {
  protected readonly templateRef = inject(TemplateRef);
  protected readonly viewContainer = inject(ViewContainerRef);

  @Input({ required: true }) conditionalRender!: boolean;
  @Input() conditionalRenderElse!: TemplateRef<any>;

  ngOnChanges() {
    this.viewContainer.clear();
    if (this.conditionalRender) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.createEmbeddedView(this.conditionalRenderElse);
    }
  }
}
