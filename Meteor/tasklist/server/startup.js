import { Meteor } from 'meteor/meteor';
import { Tarefas } from '../models/tarefas';

Meteor.startup(function () {
    Meteor.publish("tarefas", function () {
        return Tarefas.find({usuario: this.userId});
    });
});