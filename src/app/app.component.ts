import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-input-event';

  name = "Vivek"


  clicked() {
    alert("Hello" + this.name);

  }

  event(event: Event) {
    let ctrl = <HTMLInputElement>event.target;
    this.name = ctrl.value;

  }
}
