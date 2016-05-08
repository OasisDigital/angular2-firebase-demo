// Firebase Observable Demo App
// Kyle Cordes, Oasis Digital

import {Component} from '@angular/core';

import {ActivityPanel} from './activityPanel.ts';
import {PersonList} from './personList.ts';
import {OnePerson} from './onePerson.ts';

var template = `
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Activity Example</h1>
        <p>Explanation here</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <person-list></person-list>
      </div>
      <div class="col-md-4">
        <one-person [id]="'id2001'"></one-person>
        <one-person [id]="'id2002'"></one-person>
        <one-person [id]="'id2003'"></one-person>
        <one-person [id]="'id2004'"></one-person>
        <one-person [id]="'id2005'"></one-person>
        <one-person [id]="'id2006'"></one-person>
      </div>
      <div class="col-md-4">
        <activity-generator></activity-generator>
      </div>
    </div>
  </div>
`;

@Component({
  template: template,
  directives: [ActivityPanel, PersonList, OnePerson]
})
export class ActivityScreen {
}
