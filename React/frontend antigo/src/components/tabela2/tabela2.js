import React, { Component } from 'react';

const TabelHead = props => {
    return (
        <thead>
            <tr>
                <th>{props.titulo}</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    
    let linhas = props.conteudo.map( (linhas)=>
        <tr key={linhas.id}>{
            props.mostrar.map((mostra)=>
                <td key={`${linhas.id}${linhas[mostra]}`}>{linhas[mostra]}</td>)}
        </tr>
       
    )
    
    return(        
        <tbody>
            {linhas}
        </tbody>
    );
}

class Tabela2 extends Component {
    render() {

        const { titulo,conteudo,mostrar } = this.props;

        return (
            <table className="centered highlight">
                <TabelHead titulo = {titulo} />
                <TableBody conteudo={conteudo} mostrar={mostrar}/>                
            </table>
        );
    }
}

export default Tabela2;