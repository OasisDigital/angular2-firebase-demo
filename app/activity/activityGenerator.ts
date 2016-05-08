// Firebase Observable Demo App
// Kyle Cordes, Oasis Digital

// This generate some activity, changes in a Firebase database,
// so that things are changing making the point of an observable obvious.

import * as Firebase from 'firebase';

import {fbName} from './fbConfig';

export class Generator {
  ref: Firebase;

  constructor() {
    this.ref = new Firebase(fbName).child("stuff");
  }

  next() {
    let category = "cat" + Math.floor((Math.random() * 3) + 1);
    let id = "id" + Math.floor((Math.random() * 10) + 2001);
    let name = "Joe" + Math.floor((Math.random() * 900) + 1001);
    let score = Math.floor((Math.random() * 100) + 1);

    this.ref.child(category).child(id).set({
      name: name,
      score: score,
      present: score>2
    });
  }
}
