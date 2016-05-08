// Firebase Observable Demo App
// Kyle Cordes, Oasis Digital

// This component lets the user turn the activity stream on and off.
// It is off by default, so that the software does not generate a long
// stream of activity in Firebase merely from being reloaded.

import {Component, ChangeDetectorRef, OnDestroy} from '@angular/core';

import {Generator} from './activityGenerator';

var template = `
  <h2>Activity Generator</h2>

  <label>
    <input #onBox type="checkbox" (change)="enabled=onBox.checked">
    Generate
  </label>

  <p>actions performed: {{n}}</p>
`;

@Component({
  selector: 'activity-generator',
  template: template
})
export class ActivityPanel {
  n: number = 0;
  handle: any;
  enabled: boolean;

  constructor(private ref: ChangeDetectorRef) {
    let g = new Generator();
    this.handle = setInterval(() => {
      if (this.enabled) {
        g.next();
        this.n++;
        ref.detectChanges();
      }
    }, 100);
  }

  onDestroy() {
    clearInterval(this.handle);
  }
}
