import Poster from './Poster';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Top from "./Top"

export default function Home ({setIdFilme}) {
    const [items, setItems] = useState([]);

	useEffect(() => {
		const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");
		requisicao.then(resposta => {
			setItems(resposta.data);
		});
	}, []);
    return (
        <>
            <Top back = {false}/>
            <h2>Selecione o filme</h2>
            <div className = "movies">
                {items.map((item,i)=> <Poster setIdFilme = {setIdFilme}  title = {item.title} id = {item.id} key = {i} posterURL = {item.posterURL}/>)}
            </div>
            
        </>
    )
}