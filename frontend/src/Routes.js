import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CreateProdutos from "./pages/create-produtos";

import Home from './pages/home'
import Login from './pages/login'


export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/registrar" component={Login} />
                <Route exact path="/criar" component={CreateProdutos} />
            </Switch>
        </Router>
    )
}