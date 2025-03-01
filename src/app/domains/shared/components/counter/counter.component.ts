import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message =  '';

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
  }

  ngOnInit() {
    // after rendering the view, only once runs
    // Is Async, can be used for async calls
    console.log('ngOnInit');
    console.log('_'.repeat(10));
    console.log('Duration:', this.duration);
    console.log('Message:', this.message);
  }

  ngAfterViewInit() {
    // after rendering the view, is for asking if the children are ready
    console.log('ngAfterViewInit');
    console.log('_'.repeat(10));
  }

  ngDestroy() {
    // before destroying the component
    console.log('ngDestroy');
    console.log('_'.repeat(10));
  }
}
