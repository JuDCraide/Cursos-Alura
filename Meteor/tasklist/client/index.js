import { Meteor } from 'meteor/meteor';
import './index.html';

import './lista/lista';
import './novo/novo';

Meteor.startup(function () {
    Meteor.subscribe("tarefas");
})
