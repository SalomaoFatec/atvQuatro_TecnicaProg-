import React from 'react';
import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import Acomodacoes from '../pages/acomodacoes/acomodacoes';
import CadastroDependente from '../pages/cadastro_dependente/cadastro_dependente';
import CadastroClienteTitular from '../pages/cadastro_titular/cadastroClienteTitular';
import Login from "../pages/login/login";
import Teste from '../pages/teste';

const Routes = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                        <Route path="/" element = {<Login/>}/> 
                        <Route path="/cadastro" element = {<CadastroClienteTitular/>}/> 
                        <Route path="/cadastroDependente" element = {<CadastroDependente/>}/>
                        <Route path="/acomodacoes" element = {<Acomodacoes/>}/> 
                </Switch>
            </BrowserRouter>
        </>

    )
}

export default Routes