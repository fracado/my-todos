import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './task.js';
import './body.html';

// defined 'tasks' helper to return tasks from collection
Template.body.helpers({
  tasks() {
    // Show newest tasks at the top
    return Tasks.find({}, { sort: { createdAt: -1 } });
  }
});

// add event listeners
Template.body.events({
  // event handler for ADD TASK form
  // (listening to 'submit' of new-task input-field)
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    // Insert a task into the collection
    Tasks.insert({
      text,
      createdAt: new Date() // current time
    });

    // Clear form
    target.text.value = '';
  }
});
