import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
@Directive({
  standalone: true,
  selector: '[select]',
})
export class SelectDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input({ required: true }) selectFrom!: any;

  async ngOnInit() {
    const data = await this.selectFrom.load();
    this.viewContainerRef.createEmbeddedView(this.templateRef, {
      // Create the embedded view with a context object that contains
      // the data via the key `$implicit`.
      $implicit: data,
    });
  }
}
