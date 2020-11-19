import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CreateEpisodios from "./pages/create-episodios";
import CreateProdutos from "./pages/create-produtos";
import Episodios from "./pages/episodios";

import Home from './pages/home'
import Login from './pages/login'


export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/registrar" component={Login} />
                <Route exact path="/criar-categorias" component={CreateProdutos} />
                <Route exact path="/criar-episodio" component={CreateEpisodios} />
                <Route exact path="/episodio" component={Episodios} />
            </Switch>
        </Router>
    )
}