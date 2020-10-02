import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating';
//import { Tarefas } from '../../models/tarefas';
import './novo.html';

Template.novo.events({
    "submit form": function (e, template) {
        e.preventDefault();

        var input = $("#tarefa");
        var tarefa = input.val();

        //Tarefas.insert({nome : tarefa, data : new Date()});
        Meteor.call("adiciona", { nome: tarefa });
        input.val("");
    }
})