import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home';
import Sessions from './Sessions';
import Seats from './Seats';
import Success from './Success';
import Top from './Top'


export default function App (){
    return(
        <BrowserRouter>
        <Top/>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
                <Route path="/sessoes/:idFilme" exact>
					<Sessions />
				</Route>
                <Route path="/assentos/:idSessao" exact>
					<Seats />
				</Route>
                <Route path="/success" exact>
					<Success />
				</Route>
			</Switch>
		</BrowserRouter>
    )
}