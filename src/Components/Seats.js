import React from "react"
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from 'axios';
import Top from './Top'

export default function Seats ( { idSessao, setInformation } ){
    const [items, setItems] = useState([]);
    const { day = [], movie = [], seats = [] } = items;
    const [name, setName] = useState([]);
	const [cpf, setCPF] = useState([]);
    const [state, setState] = useState([])
  
    
	useEffect(() => {
		const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSessao}/seats`);
		requisicao.then(resposta => {setItems(resposta.data);});
	}, []);
    const data = { ids: state.map(n => n.id), compradores: buyers(name,cpf)}

    return(
        <>
            <Top back = {true}></Top>
            <h2>Selecione o(s) assento(s)</h2>
            <div className="seats">
                {seats.map((seat ,i ) => 
                <div 
                key = {i} 
                onClick={() => seat.isAvailable? (state.find(n => n.id == seat.id)? ((setState(state.filter(n => n.id !== seat.id)))): setState([...state, {id: seat.id, name: seat.name}])) : alert("Esse assento não está disponível")} 
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
                {state.map((n,i) =>(<>
                <p key = {i}><strong>Assento {n.name}</strong></p>
                <p>Nome do comprador:</p>
                <input placeholder = {"Digite seu nome..."} value = {name.find(n => n.id === name.idAssento? name.nome: null)} onChange={e => name.filter(n => n.id != name.idAssento)? setName([...name.filter(f => f.idAssento !== n.id), {idAssento: n.id, nome: e.target.value}]):null}></input>
                <p>CPF do comprador:</p>
                <input placeholder = {"Digite seu CPF..."} value = {cpf.find(n => n.id === cpf.idAssento? cpf.number: null)} onChange={e => cpf.filter(n => n.id != cpf.idAssento)? setCPF([...cpf.filter(f => f.idAssento !== n.id), {idAssento: n.id, number: e.target.value}]):null}></input></>))}
                
            </div>

            <div className = "button">
            <Link to="/success">
                <button onClick={() => {
		            const resposta = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many`, data);
		            resposta.catch(resposta => (alert("Ocorreu algum erro, tente novamente!")))
                    setInformation(
                        {
                            movie: 
                                {name: movie.title, date: day.date, hour: items.name},
                            seats: state.map(n => n.name), 
                            buyer: 
                                buyers(name,cpf)
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

    function buyers(name, cpf){
        let newArray = [];
        for(let i = 0; i < name.length; i++){
            let item1 = name[i];
            for(let j = 0; j < cpf.length; j++){
                let item2 = cpf[j];
                if(item1.idAssento == item2.idAssento){
                    newArray.push({idAssento: item1.idAssento, nome: item1.nome, cpf: item2.number})
                }
            }
        }
        return newArray
    }
}