import React from 'react';
import Header from '../../components/header/header';
import Typography from '@material-ui/core/Typography'
import { Container } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

const useEstilus = makeStyles({
    titulo:{
        textAlign: 'center',
        color:'blue',
    }
})


const Sobre = () => {
    const classes = useEstilus();
    return(
        <>
            <Header/>
            <Container maxWidth='sm'>
                <Typography 
                    className={classes.titulo}
                    variant='h1'
                    component='h2'>
                        Sobre
                </Typography>
                <Typography variant='body1' component='p'>
                    A Casa do Código é uma editora que desenvolve e edita livros em diversos formatos
                </Typography>
            </Container>
        </>
    );
}

export default Sobre;