// Firebase Observable Demo App
// Kyle Cordes, Oasis Digital

import {Component} from '@angular/core';

var template = `
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Angular 2 Firebase Demo App</h1>
        <p>The purpose of this application is to show how Angular 2 development
        can be very declarative, among other things.</p>
        <p>Use the links at the top</p>
      </div>
    </div>
  </div>
`;

@Component({
  template: template
})
export class WelcomeScreen {
}
