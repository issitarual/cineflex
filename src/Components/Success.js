import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Success ({ information, setId, setInformation}) {
    const {movie, buyer, seats} = information;
    const {name, hour, date} = movie;

    return(
        <>
            <h2 className = "sucess-title">Pedido feito com sucesso!</h2>
            <div className = "sucess-informations">
                <p className = "sucess-information-title">Filme e sessão</p>
                <p className = "sucess-information">{name}</p>
                <p className = "sucess-information">{date} - {hour}</p>
                <p className = "sucess-information-title">Ingressos</p>
                {seats.map((info, i) => <p key = {i} className="sucess-information">Assento {info}</p>)}
                <p className = "sucess-information-title">Comprador</p>
                <p className = "sucess-information">Nome: {buyer.name}</p>
                <p className = "sucess-information">CPF: {buyer.cpf}</p>
            </div>
            <div className = "button">
            <Link to="/">
                <button onClick={() => {setId([]); setInformation({});}}>Voltar para Home</button>
            </Link>
            </div>
        </>
    )
}