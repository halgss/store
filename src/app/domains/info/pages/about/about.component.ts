import { Component, signal } from '@angular/core';
import { HighlightDirective } from '@shared/directives/highlight.directive';
import {CounterComponent} from './../../../shared/components/counter/counter.component';
import {WaveAudioComponent} from './../../../info/components/wave-audio/wave-audio.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-about',
  imports: [CommonModule, CounterComponent, WaveAudioComponent, HighlightDirective, HeaderComponent, HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  duration = signal(1000);
  message = signal('Hello World');

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber);
  }

  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }

}
