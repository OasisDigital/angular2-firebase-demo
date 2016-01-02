import {Component} from 'angular2/core';

import {WeatherPanel} from './weatherPanel.ts';

var template = `
  <div class="container">
    <h1>Angular 2 / Firebase / Observable Weather App</h1>
    <p>The purpose of this application is to show how Angular 2 development
       can be very declarative, among other things.</p>
    <div class="row">
      <div *ngFor="#c of cities" class="col-md-4">

        <weather-panel [city]="c"></weather-panel>

      </div>
    </div>
  </div>
`;

@Component({
  template: template,
  directives: [WeatherPanel]
})
export class WeatherScreen {
  cities: string[] = ['sanfrancisco', 'austin', 'boston']

}
