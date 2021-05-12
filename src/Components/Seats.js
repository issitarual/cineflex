import React from "react"
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Seats ( { id } ){
    console.log(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${id}/seats`)
    const [items, setItems] = useState([]);

	useEffect(() => {
		const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${id}/seats`);
		requisicao.then(resposta => {setItems(resposta.data);});
	}, []);


    const [state, setState] = React.useState("seat available");

    console.log(items);

    return(
        <>
            <h2>Selecione o(s) assento(s)</h2>
            <div className="seats">
                <div onClick={() => setState("seat selected")} className = {state}>1</div>
                <div className = "seat unavailable">2</div>
                <div onClick={() => setState("seat selected")} className = {state}>4</div>
                <div onClick={() => setState("seat selected")} className = {state}>5</div>
                <div onClick={() => setState("seat selected")} className = {state}>6</div>
                <div onClick={() => setState("seat selected")} className = {state}>7</div>
                <div onClick={() => setState("seat selected")} className = {state}>8</div>
                <div onClick={() => setState("seat selected")} className = {state}>9</div>
                <div onClick={() => setState("seat selected")} className = {state}>10</div>
            </div>
            <div className="state">
                <div>
                    <div className = "selected">

                    </div>
                    <p>Selecionado</p>
                </div>
                <div>
                    <div className = "available">

                    </div>
                    <p>Disponível</p>
                </div>
                <div>
                    <div className = "unavailable">

                    </div>
                    <p>Indisponível</p>
                </div>
            </div>

            <div className = "information">
                <p>Nome do comprador:</p>
                <input type={Text} placeholder={"Digite seu nome..."}></input>
                <p>CPF do comprador:</p>
                <input type={Text} placeholder={"Digite seu CPF..."}></input>
            </div>

            <div className = "button">
            <Link to="/success">
                <button>Reservar assento(s)</button>
            </Link>
            </div>

            <div className="bottom-session-time">
                <img src></img>
                <div>
                    <p></p>
                    <p> - </p>
                </div>
            </div>
        </>
    )
}