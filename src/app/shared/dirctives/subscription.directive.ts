import { Directive, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appSubscription]',
})
export class SubscriptionDirective implements OnDestroy {
  public sub: Subscription = new Subscription();
  constructor() {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
