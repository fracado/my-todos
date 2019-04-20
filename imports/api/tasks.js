import { Mongo } from 'meteor/mongo';

//exports Mongo Collection for tasks:
export const Tasks = new Mongo.Collection('tasks');