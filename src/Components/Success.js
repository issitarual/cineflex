import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Success ({information}) {
    console.log(information)

    return(
        <>
            <h2 className = "sucess-title">Pedido feito com sucesso!</h2>
            <div className = "sucess-informations">
                <p className = "sucess-information-title">Filme e sessão</p>
                <p className = "sucess-information">{information.movie.name}</p>
                <p className = "sucess-information">{information.movie.date} - {information.movie.hour}</p>
                <p className = "sucess-information-title">Ingressos</p>
                {information.seats.map((info, i) => <p key = {i} className="sucess-information">Assento {info}</p>)}
                <p className = "sucess-information-title">Comprador</p>
                <p className = "sucess-information">Nome: {information.buyer.name}</p>
                <p className = "sucess-information">CPF: {information.buyer.cpf}</p>
            </div>
            <div className = "button">
            <Link to="/">
                <button>Voltar para Home</button>
            </Link>
            </div>
        </>
    )
}