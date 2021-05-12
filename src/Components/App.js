import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home';
import Sessions from './Sessions';
import Seats from './Seats';
import Success from './Success';
import Top from './Top'
import React from "react";


export default function App (){
    const [id, setId] = React.useState("");

    return(
        <BrowserRouter>
        <Top/>
			<Switch>
				<Route path="/" exact>
					<Home setId = {setId}/>
				</Route>
                <Route path="/sessoes/:idFilme" exact>
					<Sessions id = {id} setId = {setId}/>
				</Route>
                <Route path="/assentos/:idSessao" exact>
					<Seats id = {id} />
				</Route>
                <Route path="/success" exact>
					<Success />
				</Route>
			</Switch>
		</BrowserRouter>
    )
}