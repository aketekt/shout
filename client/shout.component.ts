import { Component } from '@angular/core';
import { Mongo } from 'meteor/mongo';
import { Shouts } from '../both/collections/shouts.collection';
import { ShoutsInputComponent } from './imports/shouts/shouts-input.component';
import template from './shout.component.html';

@Component({
  selector: 'shout',
  template,
  directives: [ShoutsInputComponent]
})
export class ShoutComponent {
  shouts: Mongo.Cursor<any>;

  constructor() {
  this.shouts = Shouts.find();
}
}
