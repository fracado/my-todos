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
  'submit .edit-task'(event) {
    event.preventDefault()
    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    // Update task in the collection
    Meteor.call('tasks.update', this._id, text);

    //display success message
    FlashMessages.sendSuccess("The task was updated successfully!");
  }
});
