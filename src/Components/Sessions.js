import SessionTime from './SessionTime';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Sessions ({ id, setId }) {
    const [items, setItems] = useState([]);

	useEffect(() => {
		const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${id}/showtimes`);
		requisicao.then(resposta => {setItems(resposta.data);});
	}, []);
    const { days = [] } = items;

    return (
        <>
            <h2>Selecione o horário</h2>
            {days.map((item,i) => <SessionTime setId = {setId} key = {i} weekday = {item.weekday} date = {item.date} showtimes = {item.showtimes}/>)}
            <div className = "bottom-space"></div>
            <div className="bottom-session-time">
                <img src={items.posterURL}></img>
                <p>{items.title}</p>
            </div>
        </>
    )

}