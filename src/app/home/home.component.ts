import { Component } from '@angular/core';
import * as pizzaList from '../pizzas.json';


@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})

export class HomeComponent {
    public pizzas = (pizzaList as any).default;

}