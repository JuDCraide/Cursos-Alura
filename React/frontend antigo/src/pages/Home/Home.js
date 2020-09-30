import React, { Component } from 'react';
import Tabela from '../../components/tabela/tabela';
import Formulario from '../../components/formulario/form';
import Header from '../../components/header/header';
import PopUp from '../../utils/popUp'

import "./Home.css";
import 'materialize-css/dist/css/materialize.min.css';
import APIService from '../../utils/APIService';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      autores: [],
    };
  }

  removeAutor = id => {

    const { autores } = this.state;

    const autoresAtualizado = autores.filter(autor => {
      console.log(autor.id);
      console.log(id);      
      return autor.id !== id;
    })

    APIService.RemoveAutor(id)
      
      .then(res => {
        if (res.message === 'deleted') {
          this.setState({ autores: [...autoresAtualizado] })
          PopUp.exibeMensagem("remove", "Autor removido com sucesso");
        }
      })
      .catch(err => PopUp.exibeMensagem("error", "Erro na comunicação com a API ao tentar remover"))
  }

  escutadorDeSubmit = autor => {

    APIService.CriaAutor(JSON.stringify(autor))
      
      .then(res => {
        if (res.message === 'success') {
          this.setState({ autores: [...this.state.autores, autor] });
          PopUp.exibeMensagem("success", "Autor adicionado com sucesso");
        }
      })
      .catch(err => PopUp.exibeMensagem("error", "Erro na comunicação com a API tentar adicionar"))
  }

  componentDidMount() {
    APIService.ListaAutores()
      
      .then(res => {
        if(res.message === 'success'){
          this.setState({ autores: [...this.state.autores, ...res.data] })
          PopUp.exibeMensagem("success", "Sucesso na comunicação com a API")
        }
      })
      .catch(err => PopUp.exibeMensagem("error", "Erro na comunicação com a API"))
  }

  render() {

    return (
      <>
        <Header />
        <div className="container mb-10">
          <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
          <Formulario escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>
      </>
    );
  }
}

export default Home;
