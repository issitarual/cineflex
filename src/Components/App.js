import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home';
import Sessions from './Sessions';
import Seats from './Seats';
import Success from './Success';
import React from "react";


export default function App (){
    const [idFilme, setIdFilme] = React.useState("");
    const [idSessao, setIdSessao] = React.useState("");
    const [information, setInformation] = React.useState({})
    return(
        <BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<Home setIdFilme = {setIdFilme}/>
				</Route>
                <Route path="/sessoes/:idFilme" exact>
					<Sessions idFilme = {idFilme} setIdSessao = {setIdSessao}/>
				</Route>
                <Route path="/assentos/:idSessao" exact>
					<Seats idSessao = {idSessao} setInformation = {setInformation}/>
				</Route>
                <Route path="/success" exact>
					<Success information = {information} setIdFilme = {setIdFilme} setIdSessao = {setIdSessao} setInformation = {setInformation}/>
				</Route>
			</Switch>
		</BrowserRouter>
    )
}