import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterComponent } from './../../../compartido/components/counter/counter.component'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

duration = signal (1000)
message = signal ('Hola');

changesDuration(event: Event) {
  const input = event.target as HTMLInputElement
  this.duration.set(input.valueAsNumber)
}

changesMessage(event: Event) {
  const input = event.target as HTMLInputElement
  this.message.set(input.value)
}

}
