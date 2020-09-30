import React, { Component } from 'react';
import Header from '../../components/header/header';
import Tabela2 from '../../components/tabela2/tabela2'


import "../Home/Home.css";
import 'materialize-css/dist/css/materialize.min.css';
import APIService from '../../utils/APIService';
import PopUp from '../../utils/popUp';

class Autores extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nomes: [],
      titulo: 'Autores'
    };
  }

  componentDidMount() {
    APIService.ListaNomes()
      
      .then(res => {
        if (res.message === 'success') {
          this.setState({ nomes: [...this.state.nomes, ...res.data] })
          PopUp.exibeMensagem("success", "Sucesso na comunicação com a API")
        }
      })
      .catch(err => PopUp.exibeMensagem("error", "Erro na comunicação com a API"))//ERRO
  }

  render() {
    return (
      <>
        <Header />
        <div className="container mb-10">
          <Tabela2 titulo={this.state.titulo} conteudo={this.state.nomes} mostrar={["nome"]} />
        </div>
      </>
    );
  }
}

export default Autores;