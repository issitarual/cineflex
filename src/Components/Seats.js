import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Top from './Top';
import State from './State';
import Seat from './Seat';
import Information from './Information';
import Bottom from './Bottom';

export default function Seats ( { idSessao, setInformation } ){
    const [items, setItems] = useState([]);
    const { day = [], movie = [], seats = [] } = items;
    const [name, setName] = useState([]);
	const [cpf, setCPF] = useState([]);
    const [state, setState] = useState([])
    const data = { ids: state.map(n => n.id), compradores: buyers(name,cpf)}
    
	useEffect(() => {
		const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSessao}/seats`);
		requisicao.then(resposta => {setItems(resposta.data);});
	}, []);
    

    return(
        <>
            <Top back = {true}></Top>
            <h2>Selecione o(s) assento(s)</h2>
            <Seat setState = {setState} state = {state} seats = {seats}></Seat>
            <State></State>
            <Information state = {state} name = {name} cpf = {cpf} setName = {setName} setCPF = {setCPF}></Information>
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
            <Bottom src = {movie.posterURL} title = {movie.title} weekday = {day.weekday} hour = {items.name}></Bottom>
        </>
    )

    function buyers(name, cpf){
        let newArray = [];
        for(let i = 0; i < name.length; i++){
            let item1 = name[i];
            for(let j = 0; j < cpf.length; j++){
                let item2 = cpf[j];
                if(item1.idAssento === item2.idAssento){
                    newArray.push({idAssento: item1.idAssento, nome: item1.nome, cpf: item2.number})
                }
            }
        }
        return newArray
    }
}