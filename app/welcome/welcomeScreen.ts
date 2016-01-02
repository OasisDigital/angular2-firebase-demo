import {Component} from 'angular2/core';

var template = `
  <div class="container">
    <div class="row">
      <div class="col-md-12">
       Welcome
      </div>
    </div>
  </div>
`;

@Component({
  template: template
})
export class WelcomeScreen {
}
