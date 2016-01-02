import {Component} from 'angular2/core';

import {WeatherPanel} from './weatherPanel.ts';

var template = `
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Weather Example</h1>
        <p>Explanation here</p>
      </div>
    </div>

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
