import { Template } from 'meteor/templating';
import { Tarefas } from '../../models/tarefas';

import './lista.html';

Template.lista.helpers({
    tarefas: function() {
        return Tarefas.find({});
    },

    formataData: function() {
        return moment(this.data).format('DD/MM/YYYY HH:mm')
    }
});

Template.lista.events({
    "click button": function(e, template) {
        var tarefa = this;

        //Tarefas.remove({_id : tarefa._id});
        Meteor.call("remove", tarefa._id)
    }
});