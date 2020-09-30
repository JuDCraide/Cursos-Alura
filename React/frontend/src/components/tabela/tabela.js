import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button'

const CellDeleta = ({removeDados, id}) => {
    if (removeDados) {
        return (
            <TableCell>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => { removeDados(id) }}>
                    Remover
                </Button>
            </TableCell>
        )
    }
    return null
}

const TituloRemove = ({removeDados}) =>{
    if(removeDados){
        return(
            <TableCell>Remover</TableCell>
        )
    }
    return null
}

function Tabela(props) {

    const { campos, dados, removeDados } = props;

    return (
        <Table>
            <TableHead>
                <TableRow>
                    {
                        campos.map(campo => (
                            <TableCell>{campo.titulo}</TableCell>
                        ))
                    }
                    <TituloRemove removeDados={removeDados}/>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    dados.map(dados => (
                        <TableRow key={dados.id}>
                            {
                                campos.map(campo => (
                                    <TableCell>{dados[campo.item]}</TableCell>
                                ))}
                            <CellDeleta id={dados.id} removeDados={removeDados} />

                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    );

}

export default Tabela;

/*
<TableCell>{dados.nome}</TableCell>
<TableCell>{dados.livro}</TableCell>
<TableCell>{dados.preco}</TableCell>
<TableCell>
    <Button
        variant="contained"
        color="primary"
        onClick={() => { removeAutor(dados.id) }}>
        Remover
    </Button>
</TableCell>
*/