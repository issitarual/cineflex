import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home';
import Sessions from './Sessions';
import Seats from './Seats';
import Success from './Success';
import Top from './Top'
import React from "react";


export default function App (){
	const information = [
        {
            movie: "movie 1",
            id: 1,
            imageURL: "https://m.media-amazon.com/images/I/51ctaU9AgCL.jpg"
        },
        {
            movie: "movie 2",
            id: 2,
            imageURL: "https://m.media-amazon.com/images/I/51ctaU9AgCL.jpg"
        },
        {
            movie: "movie 3",
            id: 3,
            imageURL: "https://m.media-amazon.com/images/I/51ctaU9AgCL.jpg"
        },
        {
            movie: "movie 4",
            id: 4,
            imageURL: "https://m.media-amazon.com/images/I/51ctaU9AgCL.jpg"
        },
        {
            movie: "movie 5",
            id: 5,
            imageURL: "https://m.media-amazon.com/images/I/51ctaU9AgCL.jpg"
        },
        {
            movie: "movie 6",
            id: 6,
            imageURL: "https://m.media-amazon.com/images/I/51ctaU9AgCL.jpg"
        }
    ]

    return(
        <BrowserRouter>
        <Top/>
			<Switch>
				<Route path="/" exact>
					<Home information = {information}/>
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