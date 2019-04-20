import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './task.html';

// add event handlers for task list buttons:
Template.task.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Tasks.update(this._id, {
      $set: { checked: !this.checked }
    });
  },
  'click .delete'() {
    Tasks.remove(this._id);
  }
});
