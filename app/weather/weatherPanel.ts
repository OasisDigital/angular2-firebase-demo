// Firebase Observable Demo App
// Kyle Cordes, Oasis Digital, November 2015

// This component displays a single entry from Firebase on the screen.
// there is an unsolved problem, noted below.

import {Component, Input, OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

import {observableFirebaseObject, observableFirebaseArray, NgWhen} from 'angular2-firebase';
import {SecondsToDatePipe} from './secondsToDatePipe.ts'

declare var Firebase: any;

var template = `
  <h3>Weather for {{city}}:</h3>
  <div *ngWhen="#c is currently | async">
    <p>current temperature: {{ c.temperature }}</p>
    <p>current windSpeed: {{ c.windSpeed }}</p>
  </div>

  <table class="table table-condensed">
    <tr>
      <th>Time</th>
      <th>Temp</th>
      <th>Precip</th>
    </tr>
    <tr *ngFor="#d of hourly | async">
      <td>{{ d.time | secondsToDate | date:'H:m:s' }}</td>
      <td>{{ d.temperature }}</td>
      <td>{{ d.precipIntensity }}</td>
    </tr>
  </table>
`;

@Component({
  selector: 'weather-panel',
  template: template,
  directives: [NgWhen],
  pipes: [SecondsToDatePipe]
})
export class WeatherPanel implements OnInit {
  @Input()
  city: string;

  currently: Observable<any>;
  hourly: Observable<any[]>;

  ngOnInit() {
    //  This can't be called in the constructor because the properties
    // from the parent template are not yet populated.

    const weatherURL = "https://publicdata-weather.firebaseio.com/";
    let city = new Firebase(weatherURL).child(this.city);

    this.currently = observableFirebaseObject(
      city.child("currently"));

    this.hourly = observableFirebaseArray(
      city.child("hourly/data").limitToLast(10));
  }
}
