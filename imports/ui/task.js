import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './task.html';

// define helper to check ownership
Template.task.helpers({
  isOwner() {
    return this.owner === Meteor.userId();
  }
});

// add event handlers for task list buttons:
Template.task.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Meteor.call('tasks.setChecked', this._id, !this.checked);
  },
  'click .delete'() {
    Meteor.call('tasks.remove', this._id);
  },
  'click .toggle-private'() {
    Meteor.call('tasks.setPrivate', this._id, !this.private);
  },
  'submit .edit-task'(e) {
    e.preventDefault()
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
    console.log(text)
    // Insert a task into the collection
    Meteor.call('tasks.update', this._id, text);
  }
});
