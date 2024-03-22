
import { Component, Input, SimpleChanges, signal } from '@angular/core';


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  @Input({required: true}) duration: number = 0;
  @Input ({required: true}) message: string = '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    // No asincrono
    // before render (Esto corre antes que el componente se muestre en la pantalla del usuario)
    //Este solo corre una sola vez
    console.log('constructor')
    console.log('-'.repeat(10))
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and  during ( se ejecuta antes y durante el componente se muestra en la pantalla del usuario)
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    console.log(duration)
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  
  ngOnInit() {
  // after render
  // solo corre una vez
  // asicronismo, promesas, peticiones, subs
  console.log('ngOnInit')
  console.log('-'.repeat(10));
  console.log('duration =>', this.duration);
  console.log('message =>', this.message);
  this.counterRef = window.setInterval(() => {
    console.log('run interval')
    this.counter.update(statePrev => statePrev + 1)
  }, 1000)
  }

  ngAfterViewInit(){
    // after render
    // hijos ya fueron "pintados"
    console.log('ngAfterViewInit')
    console.log('-'.repeat(10));
  }

  ngOnDestroy(){
    console.log('ngOnDestroy')
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef)
  }

  doSomething() {
    console.log('change duration')
    //asincronico
  }

}
