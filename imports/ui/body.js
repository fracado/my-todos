import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './body.html';

// defined 'tasks' helper to return tasks from collection
Template.body.helpers({
  tasks() {
    return Tasks.find({});
  },
});