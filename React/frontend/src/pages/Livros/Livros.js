import React, { Component } from 'react';
import Header from '../../components/header/header';
import Tabela from '../../components/tabela/tabela'


import "../Home/Home.css";
import 'materialize-css/dist/css/materialize.min.css';
import APIService from '../../utils/APIService';
import PopUp from '../../utils/popUp'

class Livros extends Component {

  constructor(props) {
    super(props);

    this.state = {
      livros: []
    };
  }

  componentDidMount() {
    APIService.ListaLivros()
      .then(res => {
        if (res.message === 'success') {
          this.setState({ livros: [...this.state.livros, ...res.data] })
          PopUp.exibeMensagem("success", "Sucesso na comunicação com a API")
        }
      })
      .catch(err => PopUp.exibeMensagem("error", "Erro na comunicação com a API"))
  }

  render() {
    const campos = [{titulo:'Livros', item:'livro'}]
    return (
      <>
        <Header />
        <div className="container mb-10">
          <Tabela 
            dados={this.state.livros}
            campos={campos} 
            />
        </div>
      </>
    );
  }
}

export default Livros;