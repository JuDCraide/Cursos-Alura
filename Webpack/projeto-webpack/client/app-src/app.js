import { NegociacaoController } from './controllers/NegociacaoController.js';
import { Negociacao } from './domain/index.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
//import 'jquery/dist/jquery.js'
import 'bootstrap/js/modal.js';
import '../css/meu-css.css';

//$('h1').click(() => alert('vc me clicou'))
//console.log($('h1').modal);

const controller = new NegociacaoController();
const negociacao = new Negociacao(new Date(), 1, 200);
const headers = new Headers();
headers.set('Content-Type', 'application/json');
const body = JSON.stringify(negociacao);
const method = 'POST';

const config = { 
    method,
    headers,
    body 
};

fetch('http://localhost:3000//negociacoes', config)
    .then(() => console.log('Dado enviado com sucesso'));