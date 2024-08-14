import {
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, Observable, Subscription } from 'rxjs';

@Directive({
  selector: '[observeElement]',
  standalone: true,
})
export class ObserveElementDirective {
  @Input() root: HTMLElement | null = null;
  @Input() rootMargin = '0px 0px 200px 0px';
  @Input() threshold = 0;
  @Input() debounceTime = 250;
  @Input() isContinuous = true;

  @Output() isIntersecting = new EventEmitter<boolean>();

  subscription!: Subscription;

  constructor(
    private readonly destroyRef: DestroyRef,
    private readonly elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.subscription = this.createAndObserve();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  createAndObserve() {
    const options: IntersectionObserverInit = {
      root: this.root,
      rootMargin: this.rootMargin,
      threshold: this.threshold,
    };

    return new Observable<boolean>((subscriber) => {
      const intersectionObserver = new IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        subscriber.next(isIntersecting);

        isIntersecting &&
          !this.isContinuous &&
          intersectionObserver.disconnect();
      }, options);

      intersectionObserver.observe(this.elementRef.nativeElement);

      return {
        unsubscribe() {
          intersectionObserver.disconnect();
        },
      };
    })
      .pipe(
        debounceTime(this.debounceTime),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((status) => {
        this.isIntersecting.emit(status);
      });
  }
}
