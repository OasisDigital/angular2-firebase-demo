// Firebase Observable Demo App
// Kyle Cordes, Oasis Digital

// This is the main application, it just composes some things on the screen
// which either generate or display activity stored in firebase.

import {Component, provide, enableProdMode} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import { LocationStrategy, HashLocationStrategy } from "@angular/common";

import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router'

import {WelcomeScreen} from './welcome/welcomeScreen';
import {ActivityScreen} from './activity/activityScreen';
import {WeatherScreen} from './weather/weatherScreen';

import "style!css!bootstrap/dist/css/bootstrap.css";

var template = `
  <div class="container">
      <a [routerLink]="['/']">Welcome</a>
      --
      <a [routerLink]="['/weather']">Weather</a>
      --
      <a [routerLink]="['/activity']">Activity</a>
      <hr>
  </div>
  <router-outlet></router-outlet>
`;

@Component({
  selector: 'my-app',
  template: template,
  directives: ROUTER_DIRECTIVES
})
@Routes([
  { path: '/', component: WelcomeScreen },
  { path: '/weather', component: WeatherScreen },
  { path: '/activity', component: ActivityScreen  }
])
class AppComponent {
}

enableProdMode();

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
