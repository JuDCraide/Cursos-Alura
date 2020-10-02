const { Tarefas } = require("../models/tarefas")

import { Meteor } from 'meteor/meteor'

Meteor.methods({
    adiciona: function(obj) {
        Tarefas.insert({nome : obj.nome, data : new Date(), usuario: Meteor.userId()});
    },
    remove: function(id) {
        Tarefas.remove({_id: id, usuario: Meteor.userId()});
    },
})