import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/Home';

import Sobre from './pages/Sobre/Sobre';
import Autores from './pages/Autores/Autores';
import Livros from './pages/Livros/Livros';
import NotFound from './pages/NotFound/NotFound';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
        <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/sobre' exact={true} component={Sobre}/>
            <Route path='/autores' exact={true} component={Autores}/>
            <Route path='/livros' exact={true} component={Livros}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
, document.getElementById('root'));
