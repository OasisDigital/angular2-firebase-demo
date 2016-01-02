// Firebase Observable Demo App
// Kyle Cordes, Oasis Digital, November 2015

// Most notably here, there is nothing necessary to unsubscribe from the
// Firebase events. That is all handled using the observable, via the template
// and the async pipe.

import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/debounceTime';

import * as Firebase from 'firebase';

import {fbName} from './fbConfig';
import {observableFirebaseArray} from 'angular2-firebase';

@Component({
  selector: 'person-list',
  template: `
  <h1>Person List</h1>
  <ul>
    <li *ngFor="#p of people | async">
    {{p["$$fbKey"]}} / {{p.name}} / {{p.score}}
    </li>
  </ul>
  `
})
export class PersonList {
  people: Observable<any[]>;

  constructor() {
    this.people = observableFirebaseArray(new Firebase(fbName)
      .child("stuff")
      .child("cat1")
      .orderByChild("name")
      .limitToFirst(6))
      .debounceTime(400);
  }
}
