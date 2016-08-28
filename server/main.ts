import {loadShouts} from './imports/shouts.ts'
import {Meteor} from 'meteor/meteor';

Meteor.startup(() => {
  loadShouts();
});
