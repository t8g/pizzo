import { Component } from '@angular/core';
import * as pizzaList from './pizzas.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public pizzas = (pizzaList as any).default;
}
