import { CommonModule } from '@angular/common';
import { Component, Input, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message =  '';
  counter = signal(0);
  counteRef: number | undefined;

  constructor() {
    //NO ASYNC CALLS IN CONSTRUCTOR
    // before rendering the view
    console.log('Constructor');
    console.log('_'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and during rendering the view
    console.log('ngOnChanges');
    console.log('_'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    console.log(duration);
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit() {
    // after rendering the view, only once runs
    // Is Async, can be used for async calls
    console.log('ngOnInit');
    console.log('_'.repeat(10));
    console.log('Duration:', this.duration);
    console.log('Message:', this.message);
    this.counteRef = window.setInterval(() => {
      console.log('run interval');
      this.counter.update(statePrev => statePrev + 1);
    }
    , 1000);
  }

  ngAfterViewInit() {
    // after rendering the view, is for asking if the children are ready
    console.log('ngAfterViewInit');
    console.log('_'.repeat(10));
  }

  ngOnDestroy() {
    // before destroying the component
    console.log('ngOnDestroy');
    console.log('_'.repeat(10));
    console.log('valor de counterRef: ',this.counteRef);
    if(this.counteRef) {
      window.clearInterval(this.counteRef);
    }
  }

  doSomething() {
    console.log('Change duration');
    console.log('_'.repeat(10));
    //is can be used for async calls
  }
}
