import SessionTime from './SessionTime';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Top from './Top';
import Bottom from './Bottom'

export default function Sessions ({ idFilme, setIdSessao }) {
    const [items, setItems] = useState([]);

	useEffect(() => {
		const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idFilme}/showtimes`);
		requisicao.then(resposta => {setItems(resposta.data);});
	}, []);
    const { days = [] } = items;

    return (
        <>
            <Top back = {true}></Top>
            <h2>Selecione o horário</h2>        
            {days.map((item,i) => <SessionTime setIdSessao = {setIdSessao} key = {i} weekday = {item.weekday} date = {item.date} showtimes = {item.showtimes}/>)}
            <div className = "bottom-space"></div>
            <Bottom src = {items.posterURL} title = {items.title} weekday = {""} hour = {""}></Bottom>
        </>
    )

}