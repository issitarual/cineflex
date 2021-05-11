import React from "react"
import { Link } from "react-router-dom"

export default function Seats (){
    const information = 
    {
        movie: "movie 6",
        id: 6,
        imageURL: "https://m.media-amazon.com/images/I/51ctaU9AgCL.jpg",
        session: "Quinta-feira",
        hour: "15:00",
        seats: 40
    }

    const [state, setState] = React.useState("seat available");
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
                <img src={information.imageURL}></img>
                <div>
                    <p>{information.movie}</p>
                    <p>{information.session} - {information.hour}</p>
                </div>
            </div>
        </>
    )
}