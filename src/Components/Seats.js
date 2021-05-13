import React from "react"
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Seats ( { id, setInformation } ){
    const [items, setItems] = useState([]);
    const { day = [], movie = [], seats = [] } = items;
    const [name, setName] = useState("");
	const [cpf, setCPF] = useState("");
    const [state, setState] = useState([])


	useEffect(() => {
		const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${id}/seats`);
		requisicao.then(resposta => {setItems(resposta.data);});
	}, []);
    const data = { ids: state.map(n => n.id), name: name, cpf: cpf }

    console.log(state)

    return(
        <>
            <h2>Selecione o(s) assento(s)</h2>
            <div className="seats">
                {seats.map((seat ,i ) => 
                <div 
                key = {i} 
                onClick={() => seat.isAvailable? (state.find(n => n.id == seat.id)? (setState(state.filter(n => n.id !== seat.id))): setState([...state, {id: seat.id, name: seat.name}])) : alert("Esse assento não está disponível")} 
                className = {seat.isAvailable? (state.find(n => n.id == seat.id) ? "seat selected": "seat available"): "seat unavailable"}>{seat.name}</div>)}
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
                <input placeholder = {"Digite seu nome..."} value = {name} onChange={e => setName(e.target.value)}></input>
                <p>CPF do comprador:</p>
                <input placeholder = {"Digite seu CPF..."} value = {cpf} onChange={e => setCPF(e.target.value)}></input>
            </div>

            <div className = "button">
            <Link to="/success">
                <button onClick={() => {
		            const resposta = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many`, data);
		            resposta.catch(resposta => (alert("Ocorreu algum erro, tente novamente!")))
                    setInformation(
                        {
                            movie: 
                                {name: movie.title, date: day.weekday, hour: items.name},
                            seats: state.map(n => n.name), 
                            buyer: 
                                {name: name, cpf: cpf}
                        })}}>
                        Reservar assento(s)
                </button>
            </Link>
            </div>

            <div className="bottom-session-time">
                <img src={movie.posterURL}></img>
                <div>
                    <p>{movie.title}</p>
                    <p>{day.weekday} - {items.name}</p>
                </div>
            </div>
        </>
    )
}