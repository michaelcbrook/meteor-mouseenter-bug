import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.body.events({
  'mouseenter .mouseme'(event, instance) {
    console.log("mouse entered");
    instance.$('.log').append("mouse entered<br>");
  },
  'mouseleave .mouseme'(event, instance) {
    console.log("mouse left");
    instance.$('.log').append("mouse left<br>");
  }
});