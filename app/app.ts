// Firebase Observable Demo App
// Kyle Cordes, Oasis Digital, January 2016

// This is the main application, it just composes some things on the screen
// which either generate or display activity stored in firebase.

import {Component, provide, enableProdMode} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import {RouteConfig, RouteParams, ROUTER_DIRECTIVES, ROUTER_PROVIDERS,
  LocationStrategy, HashLocationStrategy} from 'angular2/router'

import {WelcomeScreen} from './welcome/welcomeScreen';
import {ActivityScreen} from './activity/activityScreen';
import {WeatherScreen} from './weather/weatherScreen';

import "style!css!bootstrap/dist/css/bootstrap.css";

var template = `
  <div class="container">
      <a [routerLink]="['Welcome']">Welcome</a>
      -
      <a [routerLink]="['Weather']">Weather</a>
      -
      <a [routerLink]="['Activity']">Activity</a>
      <hr>
  </div>
  <router-outlet></router-outlet>
`;

@Component({
  selector: 'my-app',
  template: template,
  directives: ROUTER_DIRECTIVES
})
@RouteConfig([
  {path: '/', redirectTo: ['Welcome'] },
  {path: '/welcome', component: WelcomeScreen, name: 'Welcome'},
  {path: '/weather', component: WeatherScreen, name: 'Weather'},
  {path: '/activity', component: ActivityScreen, name: 'Activity'}
])
class AppComponent {
}

enableProdMode();

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
